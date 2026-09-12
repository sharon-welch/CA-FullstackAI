import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome-component/welcome-component';
import { UserListComponent } from './components/user-list-component/user-list-component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'user', component: UserListComponent}
];
