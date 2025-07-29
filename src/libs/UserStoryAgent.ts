import { ChatAnthropic } from '@langchain/anthropic';
import { JsonOutputParser } from '@langchain/core/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatOpenAI } from '@langchain/openai';
import { z } from 'zod';

// Define the schema for user story output
const _UserStorySchema = z.object({
  title: z.string(),
  userStory: z.string(),
  acceptanceCriteria: z.array(z.string()),
  definitionOfDone: z.array(z.string()),
  priority: z.enum(['High', 'Medium', 'Low']),
  estimatedEffort: z.number(),
  dependencies: z.array(z.string()),
});

export type UserStory = z.infer<typeof _UserStorySchema>;
export type UserStories = {
  userStories: UserStory[];
};

// Smart LLM selection with fallback
class SmartLLMSelector {
  private openai: ChatOpenAI | null = null;
  private anthropic: ChatAnthropic | null = null;
  private google: ChatGoogleGenerativeAI | null = null;

  constructor() {
    // Initialize LLMs if API keys are available
    if (process.env.OPENAI_API_KEY) {
      this.openai = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo',
        temperature: 0.7,
        maxTokens: 2000,
      });
    }

    if (process.env.ANTHROPIC_API_KEY) {
      this.anthropic = new ChatAnthropic({
        modelName: 'claude-3-haiku-20240307',
        temperature: 0.7,
        maxTokens: 2000,
      });
    }

    if (process.env.GOOGLE_API_KEY) {
      this.google = new ChatGoogleGenerativeAI({
        model: 'gemini-1.5-flash',
        temperature: 0.7,
        maxOutputTokens: 2000,
      });
    }
  }

  async getLLM(): Promise<ChatOpenAI | ChatAnthropic | ChatGoogleGenerativeAI | null> {
    // Try Google first (most generous free tier)
    if (this.google) {
      try {
        // Test the connection
        await this.google.invoke('Test');
        return this.google;
      } catch {
        console.warn('Google API failed, trying next...');
      }
    }

    // Try Anthropic second
    if (this.anthropic) {
      try {
        await this.anthropic.invoke('Test');
        return this.anthropic;
      } catch {
        console.warn('Anthropic API failed, trying next...');
      }
    }

    // Try OpenAI last
    if (this.openai) {
      try {
        await this.openai.invoke('Test');
        return this.openai;
      } catch {
        console.warn('OpenAI API failed');
      }
    }

    return null;
  }
}

// Create the prompt template
const promptTemplate = PromptTemplate.fromTemplate(`
You are an expert product manager and agile coach. Break down the following idea into detailed, developer-friendly user stories.

For each user story, provide:
- Title: Clear, concise title
- User Story: "As a [user], I want to [action], so that [benefit]"
- Acceptance Criteria: List of specific, testable criteria
- Definition of Done: Clear completion criteria
- Priority: High/Medium/Low
- Estimated Effort: Story points (1-8)
- Dependencies: Any blocking stories or technical requirements

Return the response as valid JSON in this exact format:
{{
  "userStories": [
    {{
      "title": "string",
      "userStory": "string", 
      "acceptanceCriteria": ["string"],
      "definitionOfDone": ["string"],
      "priority": "High|Medium|Low",
      "estimatedEffort": number,
      "dependencies": ["string"]
    }}
  ]
}}

Idea: {idea}
`);

export class UserStoryAgent {
  private llmSelector: SmartLLMSelector;
  private parser: JsonOutputParser;

  constructor() {
    this.llmSelector = new SmartLLMSelector();
    this.parser = new JsonOutputParser();
  }

  async generateUserStories(idea: string): Promise<UserStories> {
    const llm = await this.llmSelector.getLLM();

    if (!llm) {
      throw new Error('No available LLM providers. Please check your API keys.');
    }

    // Create the chain
    const chain = RunnableSequence.from([
      promptTemplate,
      llm,
      this.parser,
    ]);

    try {
      const result = await chain.invoke({ idea });
      return result as UserStories;
    } catch (error) {
      console.error('Error generating user stories:', error);
      throw new Error('Failed to generate user stories. Please try again.');
    }
  }
}
