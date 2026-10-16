import { Component, inject, input } from '@angular/core';
import { CommentService } from '../../data/comments/comment-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { PostService } from '../../data/posts/post-service';
import { NewPostComment } from '../../models/comment-model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-comment-create',
  styleUrl: './comment-create.css',
  templateUrl: './comment-create.html',
})
export class CommentCreate {
  private fb = inject(FormBuilder); 
  private commentService = inject(CommentService);
  postId = input.required<string>();
 
  // TODO: add author
  commentForm = this.fb.nonNullable.group({
      // title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      imageURL: [''],
      // done: false,
      // citation: ['', [Validators.required, Validators.minLength(2)]]
  });

  // comments = toSignal(
  //   toObservable(this.postId).pipe(switchMap(id => this.commentService.getComments(id))),
  //   { initialValue: [] as PostComment[] }
  // );
// TODO: CHANGE VALUES HERE
  async onSubmit() {
    if(this.commentForm.invalid) return; 

    const { imageURL, ...fields } = this.commentForm.getRawValue();

    // const newComment: NewPostComment = {
    //   ...fields, 
    //   // done: false,
    //   publishedAt: Date.now(),
    //   ...(imageURL && { image: { imageURL } })
    // }
    await this.commentService.addComment(this.postId(), {
      ...fields, 
      ...(imageURL && { image: { imageURL } }),
      authorName: 'Anonymous', 
      publishedAt: Date.now(),
    });

    // this.router.navigate(['/myposts']);

    // console.log('COMPONENT sending:', newComment);
  }

}

