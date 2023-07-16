// Core
import { useAppSelector } from 'engine/redux/hooks';

// Api
import { useMutation } from '@apollo/client';
import { SEND_ORDER } from "api/mutations/order";

// Utils
import { getCurrentDateTime } from "utils/getCurrentDateTime";

export interface ProductInOrder {
  id: string;
  price: string;
  currency: string;
}

export interface NewOrderDetails {
  buyerID: string,
  date: string,
  products: ProductInOrder[]
}

function useSendOrder() {

  const [createOrderWithBuyer, { data, loading, error }] = useMutation<{ createOrderWithBuyer: NewOrderDetails }>(SEND_ORDER);
  const itemsInCart = useAppSelector(state => state.cart.itemsInCart);
  const currencySelected = useAppSelector(state => state.header.currencySelected);

  function submitOrder(UserID: string): void {

    const products: ProductInOrder[] = [];

    itemsInCart.forEach(item => {
      const price = item.prices.filter(price => price.currency.label === currencySelected.label);
      products.push({
        id: item.shopId,
        price: `${price[0].amount}`,
        currency: currencySelected.label
      });
    });

    createOrderWithBuyer({
      variables: {
        input: {
          buyerID: UserID,
          date: getCurrentDateTime(),
          products: products
        }
      }
    });
  }

  return {
    submitOrder,
    data,
    loading,
    error
  }
}

export default useSendOrder;