import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

type IBlogProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Blog - Coscrum Insights and Updates',
    description: 'Read the latest insights, tips, and updates from Coscrum about AI-powered user story generation and software development.',
  };
}

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
            Insights, tips, and updates about AI-powered user story generation and software development.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Blog Post */}
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How AI is Revolutionizing User Story Creation
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how artificial intelligence is transforming the way we create and refine user stories for software development.
                </p>
                <a href="/blog/ai-revolutionizing-user-stories" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read more →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Best Practices for Writing Clear Requirements
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the essential techniques for writing requirements that developers can easily understand and implement.
                </p>
                <a href="/blog/best-practices-clear-requirements" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read more →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bridging the Gap Between Entrepreneurs and Developers
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how Coscrum helps non-technical founders communicate effectively with development teams.
                </p>
                <a href="/blog/bridging-entrepreneurs-developers" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read more →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
