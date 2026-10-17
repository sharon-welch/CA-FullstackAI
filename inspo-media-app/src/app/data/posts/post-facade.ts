import { computed, inject, Service, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { startWith, switchMap } from 'rxjs';
import { Post } from '../../models/post-model';
import { CurrentUser } from '../users/current-user';
import { buildNewPost, filterPosts, NewPostValues } from './post-helpers';
import { PostService } from './post-service';

// What the post pages talk to. Components never call PostService directly.
@Service()
export class PostFacade {
  private postService = inject(PostService);
  private currentUser = inject(CurrentUser);
  private router = inject(Router);

  // null = loading, [] = no posts
  private allPosts = toSignal(this.postService.getPosts(), { initialValue: null });

  readonly myPosts = computed(() => filterPosts(this.allPosts(), 'mine', this.currentUser.author.id));
  readonly feedPosts = computed(() => filterPosts(this.allPosts(), 'feed', this.currentUser.author.id));

  // Call from a component field initializer (needs an injection context).
  // null = loading, undefined = not found
  watchPost(postId: Signal<string>): Signal<Post | null | undefined> {
    const post$ = toObservable(postId).pipe(
      switchMap(id => this.postService.getPost(id).pipe(startWith(null))),
    );
    return toSignal(post$, { initialValue: null });
  }

  isMine(post: Post): boolean {
    return this.currentUser.owns(post);
  }

  async createPost(values: NewPostValues): Promise<void> {
    const newPost = buildNewPost(values, this.currentUser.author, Date.now());
    await this.postService.addPost(newPost);
    await this.router.navigate(['/myposts']);
  }

  deletePost(id: string): Promise<void> {
    return this.postService.deletePost(id);
  }
}
