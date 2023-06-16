//Core
import { useSelector } from "react-redux";

//Api
import { useMutation } from '@apollo/client';
import { SEND_ORDER } from "api/mutations/order";

//Utils
import { getCurrentDateTime } from "utils/getCurrentDateTime";



function useSendOrder() {

  const [createOrder, { data, loading, error }] = useMutation(SEND_ORDER);
  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const { currencySelected } = useSelector(state => state.header);

  function submitOrder() {

    const products = [];

    itemsInCart.forEach(item => {
      const price = item.prices.filter(price => price.currency.label === currencySelected.label);
      products.push({
        id: item.shopId,
        price: `${price[0].amount}`,
        currency: currencySelected.label
      });
    });

    createOrder({
      variables: {
        input: {
          buyerID: "id",
          date: getCurrentDateTime(),
          products: products
        }
      }
    });
  }

  return [submitOrder, data, loading, error];
}

export default useSendOrder;