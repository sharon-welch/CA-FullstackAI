import { Author } from '../../models/author-model';
import { ImageEntryValues } from '../../models/image-model';
import { NewPost, Post } from '../../models/post-model';
import { isOwnedBy } from '../users/author-helpers';

export type PostView = 'mine' | 'feed';

export interface NewPostValues {
  title: string;
  image: ImageEntryValues;
}

// Strategy map: which posts each page shows
export const POST_VIEW_FILTERS = (() => ({
  mine: (post: Post, userId: string) => isOwnedBy(post, userId),
  feed: (post: Post, userId: string) => !isOwnedBy(post, userId),
}) satisfies Record<PostView, (post: Post, userId: string) => boolean>)();

const WEB_URL_PATTERN = (() => /^https?:\/\/\S+$/)();

// A citation that is a web address can be shown as a link
export const citationHref = (citation: string | undefined): string | null => {
  if (!citation) return null;
  return WEB_URL_PATTERN.test(citation.trim()) ? citation.trim() : null;
};

// null (still loading) passes straight through so pages can tell loading from empty
export const filterPosts = (posts: Post[] | null, view: PostView, userId: string): Post[] | null => {
  if (!posts) return null;
  return posts.filter(post => POST_VIEW_FILTERS[view](post, userId));
};

export const buildNewPost = (values: NewPostValues, author: Author, now: number): NewPost => ({
  title: values.title,
  description: values.image.description,
  citation: values.image.citation,
  image: { imageURL: values.image.imageURL },
  done: false,
  authorId: author.id,
  authorName: author.name,
  publishedAt: now,
});
