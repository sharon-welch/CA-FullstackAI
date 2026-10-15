import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostService } from '../../data/posts/post-service';
import { NewPost } from '../../models/post-model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-post-create',
  styleUrl: './post-create.css',
  templateUrl: './post-create.html',
})
export class PostCreate {
  private fb = inject(FormBuilder); 
  private postService = inject(PostService);
  private router = inject(Router);

  postForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    imageUrl: [''],
    imageFile: null, 
    done: false,
    citation: ['', [Validators.required, Validators.minLength(2)]]
  });

  async onSubmit() {
    if(this.postForm.invalid) return; 

    const newPost: NewPost = {
      ...this.postForm.getRawValue(), 
      done: false,
      publishedAt: Date.now()
    }

    console.log('COMPONENT sending:', newPost);
    
    await this.postService.addPost(newPost);

    this.router.navigate(['/myposts']);

  }




}
