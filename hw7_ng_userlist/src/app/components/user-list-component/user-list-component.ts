import { Component, inject } from '@angular/core';
import { UserService } from '../../user-service';
import { User } from '../../user';

@Component({
  selector: 'app-user-list-component',
  imports: [],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent {
  catsMeow = inject(UserService); 

  // set user to null at start, intentional lack of an object
  currentUser: null | User = null; 
  onClick(user: User){
    // current user is user they clicked on 
    this.currentUser = user; 
  }

  onClear(){
    this.currentUser = null; 
  } 
}
