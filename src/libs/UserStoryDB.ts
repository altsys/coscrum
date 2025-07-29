import type { UserStories } from './UserStoryAgent';
import { and, eq } from 'drizzle-orm';
import { userStoriesSchema } from '@/models/Schema';
import { db } from './DB';

export type UserStoryRecord = {
  id: number;
  userId: string;
  originalIdea: string;
  userStories: UserStories;
  createdAt: Date;
  updatedAt: Date;
};

export class UserStoryDB {
  /**
   * Save generated user stories to the database
   */
  static async saveUserStories(
    userId: string,
    originalIdea: string,
    userStories: UserStories,
  ): Promise<UserStoryRecord> {
    const [record] = await db
      .insert(userStoriesSchema)
      .values({
        userId,
        originalIdea,
        userStories,
      })
      .returning();

    if (!record) {
      throw new Error('Failed to save user stories');
    }

    return record as UserStoryRecord;
  }

  /**
   * Get all user stories for a specific user
   */
  static async getUserStories(userId: string): Promise<UserStoryRecord[]> {
    const records = await db
      .select()
      .from(userStoriesSchema)
      .where(eq(userStoriesSchema.userId, userId))
      .orderBy(userStoriesSchema.createdAt);

    return records as UserStoryRecord[];
  }

  /**
   * Get a specific user story by ID
   */
  static async getUserStoryById(id: number, userId: string): Promise<UserStoryRecord | null> {
    const [record] = await db
      .select()
      .from(userStoriesSchema)
      .where(and(eq(userStoriesSchema.id, id), eq(userStoriesSchema.userId, userId)));

    return record as UserStoryRecord || null;
  }

  /**
   * Delete a user story
   */
  static async deleteUserStory(id: number, userId: string): Promise<boolean> {
    const [deleted] = await db
      .delete(userStoriesSchema)
      .where(and(eq(userStoriesSchema.id, id), eq(userStoriesSchema.userId, userId)))
      .returning();

    return !!deleted;
  }
}
