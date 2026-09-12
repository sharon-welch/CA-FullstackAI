import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CarsService } from '../cars-service';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  imports: [],
  selector: 'app-list-of-cars',
  styleUrl: './list-of-cars.css',
  templateUrl: './list-of-cars.html',
  
})
export class ListOfCars {
    carService = inject(CarsService);
    getCars = toSignal(this.carService.getCars$())

    deleteCar(id: string) {
      let val = id 
      this.carService.deleteCarFromDatabase(val);
    }
  
}


