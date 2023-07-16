// Types
import { ProductInCart } from "engine/types/products";

export const countTotalQuantity = (arr: ProductInCart[]): number => {
  let res = 0;
  arr.forEach(item => {
    res = res + item.quantity;
  });

  return res;
}