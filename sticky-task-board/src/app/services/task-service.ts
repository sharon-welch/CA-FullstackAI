import { inject, Service } from '@angular/core';
import { collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { NewTask, Task } from '../models/task';
import { Observable } from 'rxjs';

@Service()
export class TaskService {
    private firestore = inject(Firestore);
    // collection() targets datastores
    private tasksCollection = collection(this.firestore, 'tasks');

  addTask(task: NewTask) {
    return addDoc(this.tasksCollection, task);
  }

  // get all tasks from database 
  getTasks(): Observable<Task[]> {
    const q = query(this.tasksCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }

  getTask(id: string): Observable<Task> {
    const ref = doc(this.firestore, 'tasks', id);
    return docData(ref, { idField: 'id' }) as Observable<Task>;
  }

  updateTask(id: string, changes: Partial<NewTask>) {
    console.log('SERVICE updating', id, changes);
    return updateDoc(doc(this.firestore, 'tasks', id), changes);
  }
   
  deleteTask(id: string) {
    console.log('SERVICE deleting:', id);
    return deleteDoc(doc(this.firestore, 'tasks', id));
  }
}
