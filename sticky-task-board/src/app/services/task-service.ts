import { inject, Service } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';
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

  getTasks(): Observable<Task[]> {
    const q = query(this.tasksCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }



}
