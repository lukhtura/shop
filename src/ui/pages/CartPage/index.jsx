//Core
import { useSelector } from "react-redux";
import { useState } from "react";

//Api
import { useMutation } from '@apollo/client';
import { SEND_ORDER } from "api/mutations/order";

//Components
import CartList from "ui/scenes/cart/CartList";
import CartPageTotalModule from "ui/scenes/cart/CartPageTotalModule";
import SubmitButton from "ui/components/SubmitButton";
import RemoveItemsButton from "ui/scenes/cart/RemoveItemsButton/RemoveItemsButton";
import MainPageLink from "ui/components/MainPageLink";
import Spinner from "ui/components/Spinner";

//Utils
import { getCurrentDateTime } from "utils/getCurrentDateTime";

//Styles
import { useStyles } from "./styles";



function CartPage() {

  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const currencySelected = useSelector(state => state.header.currencySelected)

  const [count, setCount] = useState(1);

  const [createOrder, { loading, error, data }] = useMutation(SEND_ORDER);


  const handleOrder = (data) => {

    setCount(count + 1);

    let products = [];

    itemsInCart.forEach(item => {
      const price = item.prices.filter(price => price.currency.label === currencySelected.label);

      products.push({
        id: item.shopId,
        price: `${price[0].amount}`,
        currency: currencySelected.label
      });
    });

    console.log(products, count)

    createOrder({
      variables: {
        input: {
          buyerID: "someID",
          date: getCurrentDateTime(),
          products: products
        }
      }
    });
  };

  const classes = useStyles();

  const isCartEmpty = itemsInCart.length === 0;


  if (error) {
    console.log("error");
  }

  if (data) {
    console.log("Order created with id:", data.createOrderWithBuyer);
  }


  return (
    <>
      {/* HEADER */}
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>CART</h1>
        {isCartEmpty
          ? null
          : <RemoveItemsButton />}
      </div>
      {/* CART LIST */}
      <CartList data={itemsInCart} />
      {/* TOTAL MODULE */}
      <div className={classes.totalModule}>
        {!isCartEmpty && <CartPageTotalModule />}
        {/* ORDER BUTTON */}
        {!isCartEmpty
          ? <SubmitButton
            onClick={handleOrder}
            className={classes.orderBtn}
            disabled={loading}
          >
            {loading ? <Spinner width="15%" fill="#FFFFFF" /> : "ORDER"}
          </SubmitButton>
          : <MainPageLink />}
      </div>
    </>
  );
}

export default CartPage;