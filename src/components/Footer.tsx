import Link from 'next/link';

const Footer = () => {
  return (
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
  );
};

export default Footer;
