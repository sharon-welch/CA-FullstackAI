import { Image } from "./image-model";

export interface Post {
    id: string;
    title: string;
    description: string;
    citation: string;
    image?: Image;          // optional only because older posts may not have one
    done: boolean;
    authorName: string;     // plain string until you add Firebase Auth
    authorId: string;
    // tags: string[];
    publishedAt: number;
}

export type NewPost = Omit<Post, 'id'>;
