//This util is changing product prices on page.

export const currencyExchanger = (arr, currency) => {
  return arr.find(price => price.currency.label === currency.label);
}