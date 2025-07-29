import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { UserStoryAgent } from '@/libs/UserStoryAgent';
import { UserStoryDB } from '@/libs/UserStoryDB';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    const { idea } = await request.json();

    if (!idea || typeof idea !== 'string' || idea.trim().length === 0) {
      return NextResponse.json(
        { error: 'Idea is required and must be a non-empty string' },
        { status: 400 },
      );
    }

    const agent = new UserStoryAgent();
    const userStories = await agent.generateUserStories(idea.trim());

    // Save to database
    const savedRecord = await UserStoryDB.saveUserStories(
      userId,
      idea.trim(),
      userStories,
    );

    return NextResponse.json({
      ...userStories,
      id: savedRecord.id,
      createdAt: savedRecord.createdAt,
    });
  } catch (error) {
    console.error('Error in user stories API:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}

export async function GET(_request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    const userStories = await UserStoryDB.getUserStories(userId);

    return NextResponse.json({ userStories });
  } catch (error) {
    console.error('Error fetching user stories:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
