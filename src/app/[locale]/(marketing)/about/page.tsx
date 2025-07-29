import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'About Coscrum - AI-Powered User Story Generation',
    description: 'Learn about Coscrum, the AI agent that transforms entrepreneur ideas into developer ready user stories and prompts.',
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Coscrum
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're building the future of collaborative software development, one user story at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bridge the Gap</h3>
              <p className="text-gray-600">
                We connect entrepreneurs with developers by transforming ideas into clear, actionable user stories that anyone can understand and implement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Collaboration</h3>
              <p className="text-gray-600">
                Our AI agent understands both business requirements and technical implementation, making software development accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Coscrum Works
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Idea</h3>
                <p className="text-gray-600">
                  Describe your software idea in plain English. No technical jargon required - just tell us what you want to build.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your idea, identifies requirements, and structures them into clear user stories with acceptance criteria.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready for Development</h3>
                <p className="text-gray-600">
                  Get development-ready user stories and AI prompts that your team can immediately start working on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                A
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Chen</h3>
              <p className="text-gray-600 text-sm mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                Former software engineer turned entrepreneur. Passionate about making software development accessible to everyone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-200 to-blue-300 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                S
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Kim</h3>
              <p className="text-gray-600 text-sm mb-4">Head of Product</p>
              <p className="text-gray-600">
                Product manager with 8+ years experience in agile development. Expert in user story creation and requirement gathering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing the boundaries of AI-powered collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">Bringing together entrepreneurs and developers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Turning ideas into working software faster</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
