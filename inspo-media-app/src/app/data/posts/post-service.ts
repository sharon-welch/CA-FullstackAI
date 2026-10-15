import { inject, Service } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, docData } from '@angular/fire/firestore';
import { NewPost, Post } from '../../models/post-model';
import { Observable } from 'rxjs';
import { doc, orderBy, query } from 'firebase/firestore';

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
  // getPosts(): Observable<Post[]> {
  //   const q = query(this.postsCollection, orderBy('publishedAt', 'desc'));
  //   return collectionData(q, { idField: 'id' }) as Observable<Post[]>;
  // }
  // get an individual task 
  // getPost(id: string): Observable<Post> {
  //   const ref = doc(this.firestore, 'posts', id);
  //   return docData(ref, { idField: 'id' }) as Observable<Post>;
  // }
 
    constructor() {
        console.log('PostService is alive');
    }


}
