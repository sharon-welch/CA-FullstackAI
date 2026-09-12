import { Component, inject } from '@angular/core';
import { UserService } from '../../user-service';

@Component({
  selector: 'app-welcome-component',
  imports: [],
  templateUrl: './welcome-component.html',
  styleUrl: './welcome-component.css',
})

export class WelcomeComponent {
  userService = inject(UserService)

  // to check if the service is linked correctly  
  constructor(){
    console.log(this.userService)
  }
}
