import { Image } from "./image-model";

export interface Post {
    id: string;
    title: string;
    description: string;
    citation: string; 
    image?: Image;
    done: boolean;
    // author: Author;
    // tags: string[];
    publishedAt: number;
}

export type NewPost = Omit<Post, 'id'>;
