export enum OrderStatus {
  Idle = "idle",
  Succes = "succes",
  Error = "error"
}

export interface Currency {
  label: string;
  symbol: string;
}

export interface Price {
  currency: Currency;
  amount: number;
}

export interface Attribute {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: Attribute[];
  prices: Price[];
  brand: string;
}

export interface ProductInCart extends Omit<Product, "inStock" | "category" | "description"> {
  shopId: string;
  quantity: number;
  activeAttrs: Attribute[];
}