// Types
import { Currency, ProductInCart } from "engine/types/products";

export const countTotalPriceOfCart = (
  itemsInCart: ProductInCart[],
  currencySelected: Currency
): number => {

  let totalPrice = 0;
  let itemQuantity = 0;

  if (itemsInCart.length > 0) {

    itemsInCart.forEach((item) => {
      itemQuantity = item.quantity;
      item.prices.forEach(item => {
        if (item.currency.label === currencySelected.label) {
          totalPrice = totalPrice + item.amount * itemQuantity;
        }
      });

      itemQuantity = 0;
    });
  }

  return +totalPrice.toFixed(2);
}