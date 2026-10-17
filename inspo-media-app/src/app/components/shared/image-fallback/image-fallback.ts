import { computed, Directive, ElementRef, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';
import { FALLBACK_IMAGE_SRC } from './fallback-image';

export const pickImageSrc = (url: string | undefined, failedUrl: string | null, fallback: string): string => {
  if (!url) return fallback;
  if (url === failedUrl) return fallback;
  return url;
};

// Usage: <img [appImageFallback]="someUrl" alt="..." />
// Sets the src, and swaps to a placeholder if the URL is missing or fails to load.
@Directive({
  selector: 'img[appImageFallback]',
  host: { '[src]': 'src()' },
})
export class ImageFallback {
  appImageFallback = input<string | undefined>();

  private img = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;

  // remembers which URL failed, so a new URL gets a fresh chance to load
  private failedUrl = toSignal(
    fromEvent(this.img, 'error').pipe(map(() => this.appImageFallback() ?? null)),
    { initialValue: null },
  );

  src = computed(() => pickImageSrc(this.appImageFallback(), this.failedUrl(), FALLBACK_IMAGE_SRC));
}
