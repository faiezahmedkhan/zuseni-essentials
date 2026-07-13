import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productService = inject(ProductService);

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
}
