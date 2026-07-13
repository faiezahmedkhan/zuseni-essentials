import { Component, HostListener, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isHome = true;
  isMobileMenuOpen = false;
  
  isSearchOpen = false;
  searchQuery = '';
  searchResults: Product[] = [];
  
  cartService = inject(CartService);
  authService = inject(AuthService);
  productService = inject(ProductService);
  router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHome = event.url === '/' || event.urlAfterRedirects === '/';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  openSearch() {
    this.isSearchOpen = true;
    this.searchQuery = '';
    this.searchResults = [];
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind overlay
  }

  closeSearch() {
    this.isSearchOpen = false;
    document.body.style.overflow = '';
  }

  onSearchInput() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }
    const q = this.searchQuery.toLowerCase();
    this.searchResults = this.productService.getAllProducts().filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
}
