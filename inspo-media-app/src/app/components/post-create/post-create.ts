import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PostFacade } from '../../data/posts/post-facade';
import { ImageFields } from '../shared/image-fields/image-fields';
import { createImageFieldsGroup, showError } from '../shared/image-fields/image-fields-form';

@Component({
  imports: [ReactiveFormsModule, RouterLink, ImageFields],
  selector: 'app-post-create',
  styleUrl: './post-create.css',
  templateUrl: './post-create.html',
})
export class PostCreate {
  private postFacade = inject(PostFacade);

  postForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    image: createImageFieldsGroup(),
  });

  showError = showError;

  onSubmit(): void {
    if (this.postForm.invalid) return this.postForm.markAllAsTouched();
    this.postFacade.createPost(this.postForm.getRawValue());
  }
}
