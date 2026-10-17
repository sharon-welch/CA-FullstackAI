import { Author, Authored } from '../../models/author-model';

export const CURRENT_USER_STORAGE_KEY = (() => 'inspo.currentUser')();

export const createGuestAuthor = (id: string): Author => ({
  id,
  name: `Guest ${id.slice(0, 4)}`,
});

export const parseAuthor = (raw: string | null): Author | null => {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Author>;
    if (!parsed.id || !parsed.name) return null;
    return { id: parsed.id, name: parsed.name };
  } catch {
    return null;
  }
};

export const isOwnedBy = (item: Authored, userId: string): boolean =>
  !!item.authorId && item.authorId === userId;
