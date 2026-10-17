import { Component, inject } from '@angular/core';
import { PostFacade } from '../../data/posts/post-facade';
import { AddTile } from '../shared/add-tile/add-tile';
import { ImageGrid } from '../shared/image-grid/image-grid';
import { PostCard } from '../post-card/post-card';

@Component({
  imports: [ImageGrid, AddTile, PostCard],
  selector: 'app-post-board',
  styleUrl: './post-board.css',
  templateUrl: './post-board.html',
})
export class PostBoard {
  // null = loading, [] = no posts yet
  posts = inject(PostFacade).myPosts;
}
