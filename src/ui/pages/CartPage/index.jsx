import { useSelector } from "react-redux";

//Components
import CartList from "ui/scenes/cart/CartList";
import CartPageTotalModule from "ui/scenes/cart/CartPageTotalModule";
import SubmitButton from "ui/components/SubmitButton";
import MainPageLink from "ui/components/MainPageLink";

//Styles
import { useStyles } from "./styles";



function CartPage() {

  /*  */
  const { itemsInCart } = useSelector(state => state.cart);
  /*  */

  /**/
  const classes = useStyles();
  /**/

  const showComponent = itemsInCart.length !== 0;

  return (
    <>
      {/* HEADER */}
      <h1 className={classes.header}>CART</h1>
      {/* CART LIST */}
      <CartList data={itemsInCart} />
      {/* TOTAL MODULE */}
      <div className={classes.totalModule}>
        {showComponent && <CartPageTotalModule />}
        {/* ORDER BUTTON */}
        {showComponent
          ? <SubmitButton
            className={classes.orderBtn}
            label={"ORDER"} />
          : <MainPageLink />}
      </div>
    </>
  );
}

export default CartPage;