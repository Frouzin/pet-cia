import { Component, computed, input } from '@angular/core';
import { Product, waLink } from '../../data/site-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();

  protected readonly wa = computed(() =>
    waLink(`Olá! Tenho interesse no produto "${this.product().name}" (${this.product().brand}). Poderia me passar mais informações? 🐾`),
  );
}
