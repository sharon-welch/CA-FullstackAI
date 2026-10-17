import { inject, Service, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { startWith, switchMap } from 'rxjs';
import { PostComment } from '../../models/comment-model';
import { ImageEntryValues } from '../../models/image-model';
import { CurrentUser } from '../users/current-user';
import { buildNewComment } from './comment-helpers';
import { CommentService } from './comment-service';

// What the comment components talk to. Components never call CommentService directly.
@Service()
export class CommentFacade {
  private commentService = inject(CommentService);
  private currentUser = inject(CurrentUser);
  private router = inject(Router);

  // Call from a component field initializer (needs an injection context).
  // null = loading, [] = no comments
  watchComments(postId: Signal<string>): Signal<PostComment[] | null> {
    const comments$ = toObservable(postId).pipe(
      switchMap(id => this.commentService.getComments(id).pipe(startWith(null))),
    );
    return toSignal(comments$, { initialValue: null });
  }

  isMine(comment: PostComment): boolean {
    return this.currentUser.owns(comment);
  }

  async createComment(postId: string, values: ImageEntryValues): Promise<void> {
    const newComment = buildNewComment(values, this.currentUser.author, Date.now());
    await this.commentService.addComment(postId, newComment);
    await this.router.navigate(['/posts', postId]);
  }

  deleteComment(postId: string, commentId: string): Promise<void> {
    return this.commentService.deleteComment(postId, commentId);
  }
}
