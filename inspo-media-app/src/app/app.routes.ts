import { Routes } from '@angular/router';
import { PostBoard } from './components/post-board/post-board';
import { PostCreate } from './components/post-create/post-create';
import { PostEdit } from './components/post-edit/post-edit';
import { Feed } from './components/feed/feed';
import { PostDetail } from './components/post-detail/post-detail';
import { CommentCreate } from './components/comment-create/comment-create';

// :postId is passed straight into the component's postId input (withComponentInputBinding in app.config.ts)
export const routes: Routes = [
    { path: '', redirectTo: 'myposts', pathMatch: 'full' },
    { path: 'myposts', component: PostBoard },
    { path: 'myposts/new', component: PostCreate },
    { path: 'myposts/:id/edit', component: PostEdit },
    { path: 'feed', component: Feed },
    { path: 'posts/:postId', component: PostDetail },
    { path: 'posts/:postId/comment', component: CommentCreate },
];
