export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockAmount: number;
  categoryId: number;
  image: string;
}

export interface ProductDisplay extends Product {
  category: {
    name: string;
  };
}
