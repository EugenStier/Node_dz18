export interface Product {
  name: string;
  price: number;
}

export function calculateDiscount(product: Product, discount: number): number {
  return product.price - product.price * discount;
}

// Пример использования
export const product: Product = { name: "Laptop", price: 1000 };
