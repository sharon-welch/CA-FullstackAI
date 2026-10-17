import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallback } from '../image-fallback/image-fallback';

// Presentational square card. Buttons (edit/delete) are passed in as content
// and appear in the top-right corner.
@Component({
  imports: [RouterLink, ImageFallback],
  selector: 'app-image-card',
  styleUrl: './image-card.css',
  templateUrl: './image-card.html',
})
export class ImageCard {
  imageURL = input<string | undefined>();
  title = input<string>();
  description = input<string>();
  citation = input<string>();
  byline = input<string>();
  link = input<string | unknown[] | null>(null);

  alt = computed(() => this.title() || this.description() || 'Inspiration image');
}
