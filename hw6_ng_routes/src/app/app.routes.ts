import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Artists } from './artists/artists';
import { Books } from './books/books';
import { Places } from './places/places';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'artists', component: Artists}, 
    {path: 'books', component: Books}, 
    {path: 'places', component: Places}
];
