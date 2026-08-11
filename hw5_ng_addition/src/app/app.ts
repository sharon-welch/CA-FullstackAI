import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  result = 0;
  
  onClick(num1:string, num2:string){
    this.result = parseInt(num1) + parseInt(num2);
  }
}
