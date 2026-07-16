import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORE, waLink } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly store = STORE;
  protected readonly wa = waLink();
  protected readonly year = new Date().getFullYear();
}
