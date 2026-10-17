import { Component, computed, effect, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { PostService } from '../../data/posts/post-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-post-edit',
  styleUrl: './post-edit.css',
  templateUrl: './post-edit.html',
})
export class PostEdit {
  postService = inject(PostService)
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private fb = inject(FormBuilder); 

 
  private params = toSignal(this.route.paramMap);
  postId = computed(() => this.params()?.get('id') ?? '');

  private post$ = toObservable(this.postId).pipe(
    filter((id): id is string => id !== ''),
    switchMap(id => this.postService.getPost(id)),
  );
 
  post = toSignal(this.post$);

  postForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    imageURL: [''],
    done: false,
    citation: ['', [Validators.required, Validators.minLength(2)]]
  });
 
  constructor() {
    effect(() => {
      const p = this.post();
      if (!p) return;
      this.postForm.patchValue({
        title: p.title,
        description: p.description,
        imageURL: p.image?.imageURL,
        citation: p.citation
      });
    });
  }

  async onSubmit() {
    if (this.postForm.invalid) return;
    await this.postService.updatePost(this.postId(), this.postForm.getRawValue());
    this.router.navigate(['/myposts']);
  }
}
