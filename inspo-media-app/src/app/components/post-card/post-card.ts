import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostFacade } from '../../data/posts/post-facade';
import { Post } from '../../models/post-model';
import { ImageCard } from '../shared/image-card/image-card';

// One post in a grid. Edit/delete only show on your own posts.
@Component({
  imports: [ImageCard, RouterLink],
  selector: 'app-post-card',
  host: { class: 'grid-tile' },
  templateUrl: './post-card.html',
})
export class PostCard {
  private postFacade = inject(PostFacade);

  post = input.required<Post>();

  isMine = computed(() => this.postFacade.isMine(this.post()));
  detailLink = computed(() => ['/posts', this.post().id]);
  editLink = computed(() => ['/myposts', this.post().id, 'edit']);
  byline = computed(() => `by ${this.post().authorName ?? 'Unknown'}`);

  remove(): void {
    if (!confirm('Delete this post?')) return;
    this.postFacade.deletePost(this.post().id);
  }
}
