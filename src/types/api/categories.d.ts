import { Product } from "./products";

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoryDisplay extends Category {
  product: Product[];
}
