import { inject, Service } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, orderBy, query, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { NewPost, Post } from '../../models/post-model';
import { Observable } from 'rxjs';

// import {
//   Firestore,
//   collection,
//   addDoc,
//   collectionData,
//   doc,
//   updateDoc,
//   deleteDoc
// } from '@angular/fire/firestore';


@Service()
export class PostService {
  private firestore = inject(Firestore);
  // TODO: do I need a separate database for posts and comments?
  private postsCollection = collection(this.firestore, 'posts');

  addPost(post: NewPost){ 
    return addDoc(this.postsCollection, post)
    //  console.log('Service received: ', post);
    //  return addDoc(this.postsCollection, post); 

  }

// get all tasks from database 
  getPosts(): Observable<Post[]> {
    const q = query(this.postsCollection, orderBy('publishedAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Post[]>;
  }

  // emits undefined when the post doesn't exist
  getPost(id: string): Observable<Post | undefined> {
    const ref = doc(this.firestore, 'posts', id);
    return docData(ref, { idField: 'id' }) as Observable<Post | undefined>;
  }

  deletePost(id: string) {
    console.log('SERVICE deleting:', id);
    return deleteDoc(doc(this.firestore, 'posts', id));
  }

  updatePost(id: string, changes: Partial<NewPost>) {
    console.log('SERVICE updating', id, changes);
    return updateDoc(doc(this.firestore, 'posts', id), changes);
  }
 
  constructor() {
      console.log('PostService is alive');
  }


}
