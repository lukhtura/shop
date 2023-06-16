//Core
import { useSelector, useDispatch } from "react-redux";

//Components
import CartList from "ui/scenes/cart/CartList";
import CartPageTotalModule from "ui/scenes/cart/CartPageTotalModule";
import SubmitButton from "ui/components/SubmitButton";
import DeclineButton from "ui/components/DeclineButton";
import MainPageLink from "ui/components/MainPageLink";

//Actions
import { removeFromCart, setIsConfirmationOrderModalOpen } from "engine/redux/slices/cartSlice";

//Styles
import { useStyles } from "./styles";



function CartPage() {

  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.itemsInCart);

  const classNames = useStyles();

  const isCartEmpty = itemsInCart.length === 0;



  return (
    <>
      {/* HEADER */}
      <div className={classNames.headerContainer}>
        <h1 className={classNames.header}>CART</h1>

        {isCartEmpty
          ? null
          : <DeclineButton
            onClick={() => dispatch(removeFromCart("all"))}
            className={classNames.removeBtn}
          >
            Remove all
          </DeclineButton>}
      </div>

      {/* CART LIST */}
      <CartList data={itemsInCart} />

      {/* TOTAL MODULE */}
      <div className={classNames.totalModule}>
        {!isCartEmpty && <CartPageTotalModule />}

        {/* ORDER BUTTON */}
        {!isCartEmpty
          ? <SubmitButton
            onClick={() => dispatch(setIsConfirmationOrderModalOpen(true))}
            className={classNames.orderBtn}
          >
            ORDER
          </SubmitButton>

          : <MainPageLink />}
      </div>
    </>
  );
}

export default CartPage;