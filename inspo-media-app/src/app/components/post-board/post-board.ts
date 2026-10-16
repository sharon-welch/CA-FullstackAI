import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../data/posts/post-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Post } from '../../models/post-model';

@Component({
  imports: [RouterLink],
  selector: 'app-post-board',
  styleUrl: './post-board.css',
  templateUrl: './post-board.html',
})

export class PostBoard {
  private postService = inject(PostService);

  posts = toSignal(this.postService.getPosts(), { initialValue: [] as Post[] })

  openCount = computed(() => this.posts().filter(t => !t.done).length);
  totalCount = computed(() => this.posts().length);

  async remove(id: string) {
    if (!confirm('Delete this post?')) return;
    await this.postService.deletePost(id);
  }

}



  // posts = [
  //     { id: '1', title: 'an image for ya', description: 'layout test', 
  //     imageURL: 'https://www.mialmasevilla.com/cdn/shop/files/9022a705161ff42b7879d88f1fd6d0e8_1560d2d8-8b68-4788-93be-ce10ef1bf954.png?v=1774205220ow', imageFile: null, citation: 'hello hello 2222', done: false, publishedAt: 0 },

  //      { id: '2', title: 'an image for ya 2', description: 'layout test 2',
  //       imageURL: 'https://www.mialmasevilla.com/cdn/shop/files/9022a705161ff42b7879d88f1fd6d0e8_1560d2d8-8b68-4788-93be-ce10ef1bf954.png?v=1774205220ow', imageFile: null, citation: 'hello hello 2222', done: false, publishedAt: 0 },
  //   ];  

