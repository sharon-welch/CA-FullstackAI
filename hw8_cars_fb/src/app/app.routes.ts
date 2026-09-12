import { Routes } from '@angular/router';
import { ListOfCars } from './list-of-cars/list-of-cars';
import { AddCar } from './add-car/add-car';
import { UpdateCar } from './update-car/update-car';

export const routes: Routes = [
  { path: "cars", component: ListOfCars },
  { path: "addcar", component: AddCar }, 
  { path: "updatecar/:id", component: UpdateCar }
];
