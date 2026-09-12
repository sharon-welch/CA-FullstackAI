import { Component, inject, signal, Signal } from '@angular/core';
import { Car, CarsService } from '../cars-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-car',
  styleUrl: './add-car.css',
  templateUrl: './add-car.html',
})
export class AddCar {
  // injecting the service into the component
  carService = inject(CarsService);

  // defining reactive form 
  carForm = new FormGroup({
    make: new FormControl(''),
    model: new FormControl('')
  })

  // converting FormGroup values into a read-only signal 
  // THEN WHAT DO I DO? 
  // formValues = toSignal(
  //   this.carForm.valueChanges, 
  //   { initialValue: this.carForm.value }
  // )
  carFormSignal = signal(this.carForm);

  onSubmit() {
    // console.log(this.carForm.value)
    let newCar = this.carFormSignal().value as Car;
    console.log("new car" + newCar); 

    this.carService.addCarToDatabase();

  }
}
