'use client';

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { LocaleSwitcher } from './LocaleSwitcher';

export const AuthenticatedSidebar = (props: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Coscrum</h1>
        </div>

        <nav className="space-y-4 flex-1">
          <Link
            href="/dashboard/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/user-stories/"
            className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            User Stories
          </Link>
        </nav>

        <div className="mt-auto pt-8">
          <div className="space-y-4">
            <Link
              href="/dashboard/user-profile/"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/user-profile/security/"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              Security
            </Link>
            <SignOutButton>
              <button className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
                Sign Out
              </button>
            </SignOutButton>
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
