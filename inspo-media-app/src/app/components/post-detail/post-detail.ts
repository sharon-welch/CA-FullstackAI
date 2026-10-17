import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostFacade } from '../../data/posts/post-facade';
import { citationHref } from '../../data/posts/post-helpers';
import { CommentSection } from '../comment-section/comment-section';
import { ImageFallback } from '../shared/image-fallback/image-fallback';

// /posts/:postId: the post at the top, its image comments in a grid below
@Component({
  imports: [RouterLink, ImageFallback, CommentSection],
  selector: 'app-post-detail',
  styleUrl: './post-detail.css',
  templateUrl: './post-detail.html',
})
export class PostDetail {
  private postFacade = inject(PostFacade);

  postId = input.required<string>();

  // null = loading, undefined = not found
  post = this.postFacade.watchPost(this.postId);

  citationHref = citationHref;
  isMine = this.postFacade.isMine.bind(this.postFacade);
}
