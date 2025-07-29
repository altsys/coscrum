import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Coscrum - Transform Ideas into Development-Ready User Stories',
    description: 'AI agent that transforms entrepreneur ideas into developer ready user stories and AI software developer agent ready prompts.',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Collab to transform your idea into development-ready user stories
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coscrum is an AI agent that transforms entrepreneur ideas into developer ready user stories or AI software developer agent ready prompts.
          </p>
        </div>

        {/* Text Area with Buttons */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-100">
          <textarea
            className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your idea here..."
          />
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Generate User Stories
            </button>
            <button className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105">
              Generate Prompts
            </button>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="px-8 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Refine your ideas</h3>
              <p className="text-gray-600">Transform rough concepts into structured, actionable requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-green-200 to-blue-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clarify your requirements</h3>
              <p className="text-gray-600">Get crystal clear specifications that developers can immediately act on.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                💙
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stories developer love</h3>
              <p className="text-gray-600">Get stories that developers love to work on.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-200 to-pink-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prompts AI love</h3>
              <p className="text-gray-600">From vague idea into a prompts AI agents love to work on.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-200 to-red-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Develop with AI</h3>
              <p className="text-gray-600">Leverage AI agents to turn your ideas into working software.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-red-200 to-teal-300 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Make your own app</h3>
              <p className="text-gray-600">From idea to deployment-ready application in record time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            You know all those great ideas you have?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We want you to try them, lots of them, and find out what works. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
          </p>
        </div>
      </section>

      {/* The Coscrum Way */}
      <section className="px-8 py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Coscrum Way
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start with idea</h3>
              <p className="text-gray-600">Begin with your vision; describe your requirements in plain English</p>
            </div>
            <div className="text-gray-400 text-2xl">-→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-300 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Refine quickly into user stories</h3>
              <p className="text-gray-600">Iterate and improve; get developer ready user stories; and Acceptance Criteria</p>
            </div>
            <div className="text-gray-400 text-2xl">-→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Match with Developer</h3>
              <p className="text-gray-600">Find the right developer for your requirements</p>
            </div>
            <div className="text-gray-400 text-2xl">-→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Develop and Deploy</h3>
              <p className="text-gray-600">Build your solution and follow up with the developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What entrepreneurs are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                  <p className="text-gray-600 text-sm">Founder, TechFlow</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Coscrum transformed my vague app idea into detailed user stories in minutes. My development team was amazed at how clear and actionable the requirements were."
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-200 to-blue-300 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mike Rodriguez</h4>
                  <p className="text-gray-600 text-sm">CEO, StartupXYZ</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a non-technical founder, Coscrum gave me the confidence to build my product. The AI-generated prompts helped me communicate effectively with developers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Coscrum</h3>
              <p className="text-gray-400">
                AI agent that transforms entrepreneur ideas into developer ready user stories.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><span className="hover:text-white transition-colors cursor-pointer">User Stories</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">AI Prompts</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Requirements</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about/" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Blog</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><span className="hover:text-white transition-colors cursor-pointer">Help Center</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Documentation</span></li>
                <li><a href="https://github.com/altsys/coscrum" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Coscrum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
