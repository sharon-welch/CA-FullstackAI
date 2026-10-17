import { Component, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ImageFallback } from '../image-fallback/image-fallback';
import { controlValue$, ImageFieldsGroup, showError } from './image-fields-form';

// Image URL (with live preview), caption and citation inputs, shared by the post and comment forms
@Component({
  imports: [ReactiveFormsModule, ImageFallback],
  selector: 'app-image-fields',
  styleUrl: './image-fields.css',
  templateUrl: './image-fields.html',
})
export class ImageFields {
  group = input.required<ImageFieldsGroup>();
  descriptionLabel = input('Description');

  previewUrl = toSignal(
    toObservable(this.group).pipe(switchMap(group => controlValue$(group.controls.imageURL))),
    { initialValue: '' },
  );

  showError(control: AbstractControl): boolean {
    return showError(control);
  }
}
