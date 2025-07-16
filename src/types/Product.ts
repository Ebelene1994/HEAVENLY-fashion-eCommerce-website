export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  colors: string[];
  sizes: string[];
  fabric: string;
  care: string;
  year: string;
  createdAt: string;
}