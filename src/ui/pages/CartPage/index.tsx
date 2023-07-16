// Core
import { useAppSelector, useAppDispatch } from "engine/redux/hooks";

// Components
import CartList from "ui/scenes/cart/CartList";
import CartPageTotalModule from "ui/scenes/cart/CartPageTotalModule";
import DeclineButton from "ui/components/DeclineButton";
import MainPageLink from "ui/components/MainPageLink";

// Actions
import { removeFromCart } from "engine/redux/slices/cartSlice";

// Styles
import useCartPageStyles from "ui/pages/CartPage/styles";

function CartPage() {

  const dispatch = useAppDispatch();
  const itemsInCart = useAppSelector(state => state.cart.itemsInCart);

  const classNames = useCartPageStyles();

  const isCartEmpty = itemsInCart.length === 0;

  return (
    <div className={classNames.cartPageContainer}>
      {/* HEADER */}
      <div className={classNames.headerContainer}>
        <h1 className={classNames.header}>CART</h1>
        {
          isCartEmpty
            ? null
            : <DeclineButton
              onClick={() => dispatch(removeFromCart("all"))}
              className={classNames.removeBtn}
            >
              Remove all
            </DeclineButton>
        }
      </div>

      {/* CART LIST */}
      <CartList data={itemsInCart} />

      {/* TOTAL MODULE */}
      <>
        {!isCartEmpty && <CartPageTotalModule />}

        {/* ORDER BUTTON */}
        {
          isCartEmpty && <MainPageLink />
        }
      </>
    </div>
  );
}

export default CartPage;