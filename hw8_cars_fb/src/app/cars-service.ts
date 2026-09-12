import { Service, inject, Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Car {
  make: string;
  model: string;
  id: string;
}


@Service()
export class CarsService {

  private readonly firestore = inject(Firestore);
  private readonly carsCol = collection(this.firestore, 'cars');

  // READ (live updates)
  // have to say what type data will be imported from database using the "as" here 
  getCars$() {
    return collectionData(this.carsCol, { idField: 'id' }) as Observable<Car[]>; 
  }

  deleteCarFromDatabase(id:string) {
      // console.log(car.id)
      console.log("we made it to the service" + id)
      // return deleteDoc(doc(this.firestore,'cars', id))
    }

    addCarToDatabase() {
      console.log("made it to the service")
    }

}
