import { Component, inject } from '@angular/core';
import { PostFacade } from '../../data/posts/post-facade';
import { ImageGrid } from '../shared/image-grid/image-grid';
import { PostCard } from '../post-card/post-card';

@Component({
  imports: [ImageGrid, PostCard],
  selector: 'app-feed',
  styleUrl: './feed.css',
  templateUrl: './feed.html',
})
export class Feed {
  // null = loading, [] = nothing in the feed yet
  posts = inject(PostFacade).feedPosts;
}
