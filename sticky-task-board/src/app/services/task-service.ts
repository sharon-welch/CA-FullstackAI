import { inject, Service } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { NewTask } from '../models/task';

@Service()
export class TaskService {
    private firestore = inject(Firestore);
    // collection() targets datastores
    private tasksCollection = collection(this.firestore, 'tasks');

  addTask(task: NewTask) {
    return addDoc(this.tasksCollection, task);
  }


}
