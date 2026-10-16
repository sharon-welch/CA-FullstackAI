import { inject, Service } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, orderBy, query, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NewPostComment, PostComment } from '../../models/comment-model';

@Service()
export class CommentService {
    private firestore = inject(Firestore);

    private commentsRef(postId: string) {
        return collection(this.firestore, 'posts', postId, 'comments');
    }

    getComments(postId: string): Observable<PostComment[]> {
        const q = query(this.commentsRef(postId), orderBy('publishedAt', 'asc'));
        return collectionData(q, { idField: 'id' }) as Observable<PostComment[]>;
    }

    addComment(postId: string, comment: NewPostComment) {
        return addDoc(this.commentsRef(postId), comment);
    }

    deleteComment(postId: string, commentId: string) {
        return deleteDoc(doc(this.firestore, 'posts', postId, 'comments', commentId));
    }
}
