import { Component, computed, inject, input } from '@angular/core';
import { CommentFacade } from '../../data/comments/comment-facade';
import { PostComment } from '../../models/comment-model';
import { ImageCard } from '../shared/image-card/image-card';

// One image comment in the grid. Delete only shows on your own comments.
@Component({
  imports: [ImageCard],
  selector: 'app-comment-card',
  host: { class: 'grid-tile' },
  templateUrl: './comment-card.html',
})
export class CommentCard {
  private commentFacade = inject(CommentFacade);

  comment = input.required<PostComment>();
  postId = input.required<string>();

  isMine = computed(() => this.commentFacade.isMine(this.comment()));
  byline = computed(() => `by ${this.comment().authorName}`);

  remove(): void {
    if (!confirm('Delete this comment?')) return;
    this.commentFacade.deleteComment(this.postId(), this.comment().id);
  }
}
