import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith } from 'rxjs';

export const IMAGE_URL_PATTERN = (() => /^https?:\/\/\S+$/)();

// Factory for the fields every image entry has (posts and comments)
export const createImageFieldsGroup = () =>
  new FormGroup({
    imageURL: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(IMAGE_URL_PATTERN)],
    }),
    description: new FormControl('', { nonNullable: true }),
    citation: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
  });

export type ImageFieldsGroup = ReturnType<typeof createImageFieldsGroup>;

// A control's current value followed by every change, for use with toSignal()
export const controlValue$ = <T>(control: AbstractControl<T>): Observable<T> =>
  control.valueChanges.pipe(startWith(control.value));

export const showError = (control: AbstractControl): boolean => control.invalid && control.touched;
