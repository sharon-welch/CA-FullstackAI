import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// The "+ Add ..." square that sits first in a grid
@Component({
  imports: [RouterLink],
  selector: 'app-add-tile',
  host: { class: 'grid-tile' },
  styleUrl: './add-tile.css',
  templateUrl: './add-tile.html',
})
export class AddTile {
  label = input.required<string>();
  link = input.required<string | unknown[]>();
}
