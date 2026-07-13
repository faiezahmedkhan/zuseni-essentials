import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);

  activeCategory = 'All';
  sortOrder = 'featured';

  get products(): Product[] {
    let prods = this.productService.getProductsByCategory(this.activeCategory);
    
    if (this.sortOrder === 'price-low') {
      prods = [...prods].sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'price-high') {
      prods = [...prods].sort((a, b) => b.price - a.price);
    }
    
    return prods;
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  setSortOrder(event: any) {
    this.sortOrder = event.target.value;
  }

  addToCart(product: Product, event: Event) {
    event.stopPropagation(); // prevent clicking through to product details
    event.preventDefault();
    this.cartService.addToCart(product);
  }
}
