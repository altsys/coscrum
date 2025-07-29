'use client';

import Link from 'next/link';
import { LocaleSwitcher } from './LocaleSwitcher';

export const SidebarLayout = (props: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col h-full">
        <div className="mb-8">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Coscrum</h1>
          </Link>
        </div>

        <nav className="space-y-4 flex-1">
          <Link
            href="/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            About
          </Link>
          <Link
            href="/counter/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="pt-12">
          <div className="space-y-4">
            <Link
              href="/sign-in/"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up/"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
            <div className="px-3">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="min-h-full">
          {props.children}
        </main>
      </div>
    </div>
  );
};
