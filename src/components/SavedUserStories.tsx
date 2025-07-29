'use client';

import type { UserStoryRecord } from '@/libs/UserStoryDB';
import type { SavedUserStoriesRef } from '@/types/GenericComponentProp';
import { useEffect, useImperativeHandle, useState } from 'react';

export const SavedUserStories = (
  { ref }: { ref: React.Ref<SavedUserStoriesRef> },
) => {
  const [userStories, setUserStories] = useState<UserStoryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserStories = async () => {
    try {
      const response = await fetch('/api/user-stories');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch user stories');
      }

      setUserStories(data.userStories);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    refresh: fetchUserStories,
  }));

  useEffect(() => {
    fetchUserStories();
  }, []);

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

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-500">Loading your user stories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <div className="text-red-800">
          Error:
          {' '}
          {error}
        </div>
      </div>
    );
  }

  if (userStories.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">
          No user stories found
        </div>
        <p className="text-gray-400">
          Start by generating your first user story using the form above!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Your User Stories (
        {userStories.length}
        )
      </h2>

      {userStories.map(record => (
        <div
          key={record.id}
          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Original Idea */}
          <div className="mb-4 p-4 bg-blue-50 rounded-md">
            <h3 className="text-sm font-medium text-blue-900 mb-1">Original Idea:</h3>
            <p className="text-blue-800 italic">
              &quot;
              {record.originalIdea}
              &quot;
            </p>
            <div className="text-xs text-blue-600 mt-2">
              Created:
              {' '}
              {formatDate(record.createdAt)}
            </div>
          </div>

          {/* Generated Stories */}
          <div className="space-y-4">
            {record.userStories.userStories.map((story, index) => (
              <div
                key={index}
                className="border-l-4 border-gray-200 pl-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{story.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(story.priority)}`}>
                    {story.priority}
                  </span>
                </div>

                <p className="text-gray-600 mb-3 italic">
                  &quot;
                  {story.userStory}
                  &quot;
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2 text-sm">Acceptance Criteria:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {story.acceptanceCriteria.map((criterion, idx) => (
                        <li key={idx}>{criterion}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-2 text-sm">Definition of Done:</h5>
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
        </div>
      ))}
    </div>
  );
};

SavedUserStories.displayName = 'SavedUserStories';
