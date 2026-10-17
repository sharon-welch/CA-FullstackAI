export interface Image {
    imageURL: string;
    // imageFile: File | null;
    // url: string;
    // altText: string;
    // width: number;
    // height: number;
}

// The fields shared by every "image + caption + citation" form (posts and comments)
export interface ImageEntryValues {
    imageURL: string;
    description: string;
    citation: string;
}
