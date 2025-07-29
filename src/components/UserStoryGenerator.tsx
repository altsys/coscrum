'use client';

import type { UserStory } from '@/libs/UserStoryAgent';
import { useState } from 'react';

type UserStoryGeneratorProps = {
  onStoriesGenerated?: (stories: UserStory[]) => void;
  onRefreshSavedStories?: () => void;
};

export function UserStoryGenerator({ onStoriesGenerated, onRefreshSavedStories }: UserStoryGeneratorProps) {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedStories, setGeneratedStories] = useState<UserStory[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idea.trim()) {
      setError('Please enter an idea to break down into user stories.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user-stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea: idea.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate user stories');
      }

      setGeneratedStories(data.userStories);
      onStoriesGenerated?.(data.userStories);

      // Clear the form and refresh saved stories
      setIdea('');
      onRefreshSavedStories?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Generate User Stories
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your idea or feature
            </label>
            <textarea
              id="idea"
              value={idea}
              onChange={e => setIdea(e.target.value)}
              placeholder="e.g., Build a task management app with real-time collaboration, file sharing, and progress tracking..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !idea.trim()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating User Stories...' : 'Generate User Stories'}
          </button>
        </form>
      </div>

      {/* Generated Stories */}
      {generatedStories.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Generated User Stories (
            {generatedStories.length}
            )
          </h3>

          {generatedStories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{story.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(story.priority)}`}>
                  {story.priority}
                </span>
              </div>

              <p className="text-gray-600 mb-4 italic">
                &quot;
                {story.userStory}
                &quot;
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Acceptance Criteria:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {story.acceptanceCriteria.map((criterion, idx) => (
                      <li key={idx}>{criterion}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Definition of Done:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {story.definitionOfDone.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  Estimated Effort:
                  {story.estimatedEffort}
                  {' '}
                  story points
                </span>
                {story.dependencies.length > 0 && (
                  <span>
                    Dependencies:
                    {story.dependencies.join(', ')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
