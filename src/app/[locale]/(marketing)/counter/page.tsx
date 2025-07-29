import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IBlogProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Counter - Coscrum',
    description: 'A simple counter example for Coscrum.',
  };
}

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing User Story Creation',
    excerpt: 'Discover how artificial intelligence is transforming the way we write and structure user stories for software development.',
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
    author: 'Sarah Kim',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Collaboration',
    slug: 'bridge-entrepreneurs-developers',
  },
  {
    id: 3,
    title: '5 Tips for Writing Better User Stories',
    excerpt: 'Master the art of writing clear, actionable user stories that developers love to work with.',
    author: 'Alex Chen',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Best Practices',
    slug: 'tips-writing-better-user-stories',
  },
  {
    id: 4,
    title: 'From Idea to MVP: A Complete Guide',
    excerpt: 'A step-by-step guide to transforming your startup idea into a minimum viable product using modern tools.',
    author: 'Sarah Kim',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Startup Guide',
    slug: 'idea-to-mvp-complete-guide',
  },
  {
    id: 5,
    title: 'The Future of AI-Powered Development',
    excerpt: 'Exploring how AI agents will change the landscape of software development in the coming years.',
    author: 'Alex Chen',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'AI & Development',
    slug: 'future-ai-powered-development',
  },
  {
    id: 6,
    title: 'Building Effective Development Teams',
    excerpt: 'Strategies for creating high-performing development teams that deliver quality software consistently.',
    author: 'Sarah Kim',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Team Building',
    slug: 'building-effective-development-teams',
  },
];

export default async function Blog(props: IBlogProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Coscrum Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tips, and updates on AI-powered software development and user story creation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <div className="flex space-x-1">
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
              </div>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest insights on AI-powered development and user story creation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
