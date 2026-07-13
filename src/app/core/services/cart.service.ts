import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // State
  private cartItems = signal<CartItem[]>([]);
  public isCartOpen = signal<boolean>(false);

  // Computed Values
  readonly items = this.cartItems.asReadonly();
  
  readonly totalItems = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.quantity, 0);
  });
  
  readonly subtotal = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  });

  constructor() { }

  openCart() { this.isCartOpen.set(true); }
  closeCart() { this.isCartOpen.set(false); }
  toggleCart() { this.isCartOpen.update(v => !v); }

  addToCart(product: Product, quantity: number = 1) {
    this.cartItems.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => 
          i.product.id === product.id 
            ? { ...i, quantity: i.quantity + quantity } 
            : i
        );
      }
      return [...items, { product, quantity }];
    });
    
    // Auto-open cart when item is added
    this.openCart();
  }

  removeFromCart(productId: string) {
    this.cartItems.update(items => items.filter(i => i.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItems.update(items => 
      items.map(i => i.product.id === productId ? { ...i, quantity } : i)
    );
  }
}
