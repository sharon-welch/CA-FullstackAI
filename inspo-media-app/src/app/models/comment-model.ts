import { Image } from "./image-model";

export interface PostComment {
    id: string;
    description: string;
    // citation: string; 
    image?: Image;
    // done: boolean;
    authorName: string;   // plain string until you add Firebase Auth
    publishedAt: number;
}

export type NewPostComment = Omit<PostComment, 'id'>;

