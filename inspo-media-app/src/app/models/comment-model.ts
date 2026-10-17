import { Image } from "./image-model";

export interface PostComment {
    id: string;
    description: string;    // the caption
    citation: string;
    image: Image;
    authorName: string;     // plain string until you add Firebase Auth
    authorId: string;
    publishedAt: number;
}

export type NewPostComment = Omit<PostComment, 'id'>;
