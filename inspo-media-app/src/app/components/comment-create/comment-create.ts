import { Component, computed, inject, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommentFacade } from '../../data/comments/comment-facade';
import { PostFacade } from '../../data/posts/post-facade';
import { ImageFields } from '../shared/image-fields/image-fields';
import { createImageFieldsGroup } from '../shared/image-fields/image-fields-form';

// /posts/:postId/comment: respond to a post with an image
@Component({
  imports: [ReactiveFormsModule, RouterLink, ImageFields],
  selector: 'app-comment-create',
  styleUrl: './comment-create.css',
  templateUrl: './comment-create.html',
})
export class CommentCreate {
  private commentFacade = inject(CommentFacade);

  postId = input.required<string>();

  // shown as "Commenting on ..." (null = loading, undefined = not found)
  post = inject(PostFacade).watchPost(this.postId);
  postLink = computed(() => ['/posts', this.postId()]);

  commentForm = createImageFieldsGroup();

  onSubmit(): void {
    if (this.commentForm.invalid) return this.commentForm.markAllAsTouched();
    this.commentFacade.createComment(this.postId(), this.commentForm.getRawValue());
  }
}
