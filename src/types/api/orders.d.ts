export interface OrderCore {
  orderNumber: number;
  totalAmount: number;
  status: boolean;
}

export interface Order extends OrderCore {
  id: number;
  orderDate: string;
}

export interface OrderDisplay extends Order {
  user: {
    email: string;
  };
}
