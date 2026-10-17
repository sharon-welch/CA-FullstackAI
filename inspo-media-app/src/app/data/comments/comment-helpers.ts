import { Author } from '../../models/author-model';
import { NewPostComment } from '../../models/comment-model';
import { ImageEntryValues } from '../../models/image-model';

export const buildNewComment = (values: ImageEntryValues, author: Author, now: number): NewPostComment => ({
  description: values.description,
  citation: values.citation,
  image: { imageURL: values.imageURL },
  authorId: author.id,
  authorName: author.name,
  publishedAt: now,
});
