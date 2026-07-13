import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);

  updateQuantity(productId: string, event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value, 10);
    this.cartService.updateQuantity(productId, value);
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }
}
