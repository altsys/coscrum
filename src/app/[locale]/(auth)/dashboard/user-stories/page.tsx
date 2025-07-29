'use client';

import type { SavedUserStoriesRef } from '@/types/GenericComponentProp';
import { useRef } from 'react';
import { SavedUserStories } from '@/components/SavedUserStories';
import { UserStoryGenerator } from '@/components/UserStoryGenerator';

export default function UserStoriesPage() {
  const savedStoriesRef = useRef<SavedUserStoriesRef | null>(null);

  const handleRefreshSavedStories = () => {
    savedStoriesRef.current?.refresh();
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">User Stories</h1>
        <p className="text-gray-600">Manage and track your user stories</p>
      </div>

      {/* User Story Generator */}
      <div className="mb-8">
        <UserStoryGenerator onRefreshSavedStories={handleRefreshSavedStories} />
      </div>

      {/* Saved User Stories */}
      <div className="mb-8">
        <SavedUserStories ref={savedStoriesRef} />
      </div>
    </div>
  );
}
