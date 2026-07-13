import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class CheckoutComponent implements OnInit {
  cartService = inject(CartService);
  fb = inject(FormBuilder);
  router = inject(Router);

  isSuccess = false;
  orderNumber = '';

  checkoutForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
    expiry: ['', Validators.required],
    cvv: ['', Validators.required],
  });

  ngOnInit() {
    if (this.cartService.totalItems() === 0) {
      this.router.navigate(['/shop']);
    }
  }

  placeOrder() {
    if (this.checkoutForm.valid) {
      // Mock order processing
      this.isSuccess = true;
      this.orderNumber = Math.floor(Math.random() * 1000000).toString();
      this.cartService.clearCart();
    }
  }
}
