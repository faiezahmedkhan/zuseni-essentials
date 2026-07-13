import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);

  bestsellers = this.productService.getAllProducts().slice(0, 3);

  addToCart(product: Product, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(product, 1);
  }

  activeIngredientIndex = 0;
  ingredients = [
    { name: 'Pure Rosehip', description: 'Rich in Vitamin C and essential fatty acids, our organic rosehip oil visibly brightens and evens skin tone while reducing fine lines.', bgImage: '/images/bg_rosehip.jpg' },
    { name: 'French Lavender', description: 'Calms redness, soothes the senses, and provides powerful anti-inflammatory benefits to sensitive skin.', bgImage: '/images/bg_lavender.jpg' },
    { name: 'Golden Argan', description: 'The liquid gold of Morocco. Deeply nourishing and rich in antioxidants to repair and protect the skin barrier.', bgImage: '/images/bg_argan.jpg' }
  ];

  setIngredient(index: number) {
    this.activeIngredientIndex = index;
  }

  activeProductCategory = 'Face Care';
  
  productCategories = [
    { name: 'Face Care', images: ['/images/organic_serum.jpg', '/images/organic_cream.jpg'] },
    { name: 'Hair Care', images: ['/images/essential_oils.jpg', '/images/organic_serum.jpg'] },
    { name: 'Body & Bath', images: ['/images/organic_cream.jpg', '/images/essential_oils.jpg'] },
    { name: 'Essential Oils', images: ['/images/essential_oils.jpg', '/images/organic_serum.jpg'] }
  ];

  galleryImages = [
    '/images/organic_serum.jpg',
    '/images/organic_cream.jpg',
    '/images/essential_oils.jpg'
  ];

  currentGalleryIndex = 0;

  nextGalleryImage() {
    this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.galleryImages.length;
  }

  prevGalleryImage() {
    this.currentGalleryIndex = (this.currentGalleryIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  setActiveCategory(cat: string) {
    this.activeProductCategory = cat;
  }

  getActiveImages() {
    return this.productCategories.find(c => c.name === this.activeProductCategory)?.images || [];
  }

  testimonials = [
    { quote: "Zuseni's Aura Serum completely transformed my skin texture in just two weeks. It feels like absolute luxury in a bottle.", author: "Sarah M." },
    { quote: "I love that everything is 100% organic. The Lumina cream absorbs beautifully and leaves my skin glowing all day.", author: "Elena R." },
    { quote: "The best botanical skincare I have ever used. My skin has never felt so hydrated and nourished.", author: "Jessica T." }
  ];
}
