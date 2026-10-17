import { Component } from '@angular/core';

// Wraps tiles into rows of 3. Each tile adds the global "grid-tile" class (see styles.css).
@Component({
  selector: 'app-image-grid',
  styleUrl: './image-grid.css',
  templateUrl: './image-grid.html',
})
export class ImageGrid {}
