export interface Order {
  id: number;
  orderNumber: number;
  orderDate: string;
  totalAmount: string;
  status: boolean;
}

export interface OrderDisplay extends Order {
  user: {
    email: string;
  };
}
