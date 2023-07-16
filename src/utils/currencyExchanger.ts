// change product prices on page.

// Types
import { Currency, Price } from "engine/types/products";

export const currencyExchanger = (
  prices: Price[],
  currency: Currency
): Price => {

  const desiredPrice = prices.find(price => price.currency.label === currency.label);

  if (!desiredPrice) {
    return prices[0];
  } else {
    return desiredPrice;
  }
}