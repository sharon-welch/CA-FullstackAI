import { Component, computed, inject, input } from '@angular/core';
import { CommentFacade } from '../../data/comments/comment-facade';
import { AddTile } from '../shared/add-tile/add-tile';
import { ImageGrid } from '../shared/image-grid/image-grid';
import { CommentCard } from '../comment-card/comment-card';

// Grid of image comments for one post, with the "Add comment" tile first
@Component({
  imports: [ImageGrid, AddTile, CommentCard],
  selector: 'app-comment-section',
  styleUrl: './comment-section.css',
  templateUrl: './comment-section.html',
})
export class CommentSection {
  postId = input.required<string>();

  // null = loading, [] = no comments yet
  comments = inject(CommentFacade).watchComments(this.postId);

  addLink = computed(() => ['/posts', this.postId(), 'comment']);
}
