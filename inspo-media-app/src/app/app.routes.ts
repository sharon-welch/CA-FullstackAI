import { Routes } from '@angular/router';
import { PostBoard } from './components/post-board/post-board';
import { PostCreate } from './components/post-create/post-create';
import { PostEdit } from './components/post-edit/post-edit';
import { Feed } from './components/feed/feed';

export const routes: Routes = [
    { path: '', component: PostBoard },
    { path: 'myposts', component: PostBoard },
    { path: 'myposts/new', component: PostCreate },
    { path: 'myposts/:id/edit', component: PostEdit },
    { path: 'feed', component: Feed },



];
