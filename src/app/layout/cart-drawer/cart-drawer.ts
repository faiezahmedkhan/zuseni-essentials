import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss'
})
export class CartDrawerComponent {
  cartService = inject(CartService);

  closeDrawer() {
    this.cartService.closeCart();
  }

  updateQuantity(productId: string, event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value, 10);
    this.cartService.updateQuantity(productId, value);
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }
}
