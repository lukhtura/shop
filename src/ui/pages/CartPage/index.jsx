import { useSelector } from "react-redux";

//Components
import CartList from "src/ui/components/CartList";
import CartPageTotalModule from "src/ui/components/CartPageTotalModule";
import SubmitButton from "src/ui/components/SubmitButton";
import MainPageLink from "src/ui/components/MainPageLink";

//Styles
import { useStyles } from "./styles";



function CartPage() {

  /* STATE */
  const { itemsInCart } = useSelector(state => state.cart);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

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