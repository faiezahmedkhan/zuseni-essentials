import { Injectable, signal } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productsData: Product[] = [
    {
      id: 'p1',
      name: 'Radiance Face Serum',
      category: 'Face Care',
      price: 45.00,
      image: '/images/organic_serum.jpg',
      shortDescription: 'A potent, lightweight serum that brightens and evens skin tone.',
      fullDescription: 'Our Radiance Face Serum is a luxurious blend of antioxidant-rich botanical extracts and pure essential oils designed to rejuvenate your skin while you sleep. Formulated to absorb instantly, it leaves no greasy residue, just a natural, healthy glow.',
      ingredients: ['Vitamin C', 'Rosehip Oil', 'Hyaluronic Acid'],
      benefits: ['Brightens complexion', 'Reduces dark spots', 'Hydrates deeply'],
      directions: 'Apply 3-4 drops to clean, dry skin morning and night before moisturizer.'
    },
    {
      id: 'p2',
      name: 'Nourishing Night Cream',
      category: 'Face Care',
      price: 52.00,
      image: '/images/organic_cream.jpg',
      shortDescription: 'Intensive restorative treatment for dry, damaged hair.',
      fullDescription: 'Restore your hair\'s natural vitality with our deeply conditioning mask. Enriched with cold-pressed argan oil and shea butter, it repairs split ends, tames frizz, and restores brilliant shine to even the most chemically treated hair.',
      ingredients: ['Organic Argan Oil', 'Raw Shea Butter', 'Coconut Extract', 'Pro-Vitamin B5'],
      benefits: ['Repairs damaged cuticles', 'Prevents future breakage', 'Adds luminous shine'],
      directions: 'Apply generously to damp hair from mid-lengths to ends. Leave on for 10-15 minutes, then rinse thoroughly.'
    },
    {
      id: 'p4',
      name: 'Calming Body Butter',
      category: 'Body & Bath',
      price: 32.00,
      image: '/images/organic_cream.jpg',
      shortDescription: 'Silky smooth hydration with a calming botanical scent.',
      fullDescription: 'Wrap your body in pure, soothing moisture. Our lightweight, fast-absorbing lotion is packed with aloe vera and jojoba oil to nourish the skin barrier and lock in moisture all day long, leaving a delicate scent of lavender and chamomile.',
      ingredients: ['Aloe Vera Juice', 'Jojoba Oil', 'Lavender Essential Oil', 'Chamomile Extract'],
      benefits: ['24-hour hydration', 'Soothes irritated skin', 'Improves skin elasticity'],
      directions: 'Massage into clean, dry skin focusing on dry areas like elbows and knees. Use daily for best results.'
    },
    {
      id: 'prod-004',
      name: 'Revitalizing Shampoo',
      category: 'Hair Care',
      price: 28.00,
      image: '/images/essential_oils.jpg',
      shortDescription: 'Gentle, sulfate-free cleansing for all hair types.',
      fullDescription: 'A clarifying yet gentle shampoo that removes buildup without stripping away natural oils. Infused with peppermint and rosemary, it invigorates the scalp and promotes healthy hair growth from the roots.',
      ingredients: ['Rosemary Extract', 'Peppermint Oil', 'Aloe Vera', 'Plant-based Surfactants'],
      benefits: ['Cleanses without stripping', 'Invigorates the scalp', 'Promotes healthy growth'],
      directions: 'Apply to wet hair, lather well, and massage into the scalp. Rinse completely.'
    },
    {
      id: 'p6',
      name: 'Rosewater Facial Mist',
      category: 'Face Care',
      price: 28.00,
      image: '/images/organic_serum.jpg',
      shortDescription: 'Deep-cleans pores and balances sebum production.',
      fullDescription: 'A non-foaming, mineral-rich clay cleanser that draws out impurities and gently exfoliates dead skin cells. Perfect for daily use, it leaves your face feeling incredibly clean, soft, and never tight.',
      ingredients: ['French Green Clay', 'White Willow Bark', 'Green Tea Extract', 'Glycerin'],
      benefits: ['Unclogs pores', 'Gently exfoliates', 'Balances oily skin'],
      directions: 'Massage a dime-sized amount onto damp skin. Rinse with warm water and pat dry.'
    },
{
  id: 'p7', // Make sure this is unique
  name: 'Organic hair oil',
  category: 'Hair oil', // Must match an existing category
  price: 35.00,
  image: '/images/organic_serum.jpg',
  shortDescription: 'A brief 1-sentence description.',
  fullDescription: 'A longer, detailed description about what the product does.',
  ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  directions: 'How to use this product.'
},
    {
      id: 'p5',
      name: 'Pure Lavender Essential Oil',
      category: 'Essential Oils',
      price: 24.00,
      image: '/images/essential_oils.jpg',
      shortDescription: 'Melt away stress with this therapeutic botanical blend.',
      fullDescription: 'A carefully crafted synergy of grounding essential oils designed to promote relaxation and prepare the mind for restful sleep. Diffuse it in your bedroom or add a few drops to a warm bath for the ultimate spa experience at home.',
      ingredients: ['Lavender Oil', 'Ylang Ylang Oil', 'Bergamot Oil', 'Cedarwood Oil'],
      benefits: ['Promotes deep relaxation', 'Eases nervous tension', 'Improves sleep quality'],
      directions: 'Add 5-7 drops to a diffuser, or mix 2 drops with a carrier oil for a calming massage.'
    }
  ];

  products = signal<Product[]>(this.productsData);
  
  categories = signal<string[]>(['All', 'Face Care', 'Hair Care', 'Body & Bath', 'Essential Oils']);

  constructor() { }

  getAllProducts(): Product[] {
    return this.products();
  }

  getProductById(id: string): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    if (category === 'All') return this.products();
    return this.products().filter(p => p.category === category);
  }
}
