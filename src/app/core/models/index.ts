export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  benefits: string[];
  directions: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
