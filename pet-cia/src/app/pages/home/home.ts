import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../shared/product-card/product-card';
import {
  CATEGORIES,
  DIFFERENTIALS,
  PRODUCTS,
  STATS,
  STORE,
  TESTIMONIALS,
  waLink,
} from '../../data/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly categories = CATEGORIES;
  protected readonly differentials = DIFFERENTIALS;
  protected readonly testimonials = TESTIMONIALS;
  protected readonly stats = STATS;
  protected readonly store = STORE;
  protected readonly wa = waLink();

  /** Destaques = produtos com selo (mais vendidos / novidades). */
  protected readonly featured = PRODUCTS.filter((p) => p.tag).slice(0, 4);
}
