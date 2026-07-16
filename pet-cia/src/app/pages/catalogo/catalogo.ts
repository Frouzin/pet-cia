import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../shared/product-card/product-card';
import { CATEGORIES, PRODUCTS, waLink } from '../../data/site-data';

@Component({
  selector: 'app-catalogo',
  imports: [ProductCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
  private readonly route = inject(ActivatedRoute);

  protected readonly categories = CATEGORIES;
  protected readonly wa = waLink();
  protected readonly activeCat = signal<string>('all');

  constructor() {
    // Permite chegar já filtrado a partir dos cards da Home (?cat=racao)
    const cat = this.route.snapshot.queryParamMap.get('cat');
    if (cat && CATEGORIES.some((c) => c.id === cat)) {
      this.activeCat.set(cat);
    }
  }

  protected readonly filtered = computed(() => {
    const cat = this.activeCat();
    return cat === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  });

  setCat(id: string): void {
    this.activeCat.set(id);
  }
}
