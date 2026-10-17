export interface Author {
    id: string;
    name: string;
}

// Anything that was created by someone (posts, comments)
export interface Authored {
    authorId?: string;
}
