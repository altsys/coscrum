import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';

type IBlogPostProps = {
  params: Promise<{ locale: string; slug: string }>;
};

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing User Story Creation',
    excerpt: 'Discover how artificial intelligence is transforming the way we write and structure user stories for software development.',
    content: `
      <h2>The Evolution of User Story Creation</h2>
      <p>User stories have been a cornerstone of agile development for decades, but the way we create them is evolving rapidly thanks to artificial intelligence. Traditional user story creation often involved hours of meetings, back-and-forth communication, and manual documentation that was prone to errors and inconsistencies.</p>
      
      <h3>How AI is Changing the Game</h3>
      <p>Modern AI systems can analyze business requirements and automatically generate detailed user stories with proper acceptance criteria. This not only saves time but also ensures consistency and completeness across all user stories in a project.</p>
      
      <h3>Key Benefits of AI-Powered User Stories</h3>
      <ul>
        <li><strong>Speed:</strong> Generate user stories in minutes instead of hours</li>
        <li><strong>Consistency:</strong> Maintain uniform structure and format</li>
        <li><strong>Completeness:</strong> Ensure all necessary details are included</li>
        <li><strong>Accessibility:</strong> Make technical requirements understandable to non-technical stakeholders</li>
      </ul>
      
      <h3>The Future of User Story Creation</h3>
      <p>As AI technology continues to advance, we can expect even more sophisticated user story generation capabilities. This includes better understanding of business context, automatic prioritization, and integration with project management tools.</p>
    `,
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Development',
    slug: 'ai-revolutionizing-user-story-creation',
  },
  {
    id: 2,
    title: 'The Bridge Between Entrepreneurs and Developers',
    excerpt: 'Learn how Coscrum is helping non-technical founders communicate effectively with development teams.',
    content: `
      <h2>Breaking Down Communication Barriers</h2>
      <p>One of the biggest challenges in software development is the communication gap between entrepreneurs with great ideas and developers who need clear, technical specifications to build them. This gap often leads to misunderstandings, scope creep, and failed projects.</p>
      
      <h3>The Coscrum Solution</h3>
      <p>Coscrum acts as a bridge between these two worlds by translating entrepreneurial vision into developer-ready specifications. Our AI understands both business requirements and technical implementation, making it easier for teams to work together effectively.</p>
      
      <h3>Real-World Impact</h3>
      <p>Startups using Coscrum have reported:</p>
      <ul>
        <li>50% reduction in development time</li>
        <li>90% fewer requirement clarification meetings</li>
        <li>Improved team satisfaction and retention</li>
        <li>Faster time to market</li>
      </ul>
    `,
    author: 'Sarah Kim',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Collaboration',
    slug: 'bridge-entrepreneurs-developers',
  },
];

export async function generateMetadata(props: IBlogPostProps) {
  const { slug } = await props.params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Coscrum Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost(props: IBlogPostProps) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog */}
      <div className="px-8 py-6">
        <Link
          href="/counter/"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map(relatedPost => (
                <article key={relatedPost.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="text-xs text-gray-500">
                    {relatedPost.author}
                    {' '}
                    •
                    {' '}
                    {new Date(relatedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
