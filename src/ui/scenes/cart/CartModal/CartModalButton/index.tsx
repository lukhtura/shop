//Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

//Actions
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";

//Styles
import useCartModalButtonStyles from "ui/scenes/cart/CartModal/CartModalButton/styles";
import cartImg from "assets/icons/cart-icon.svg";

const CartModalButton = () => {

  const dispatch = useAppDispatch();
  const { isCartModalOpen } = useAppSelector(state => state.header);
  const quantity = useAppSelector(state => state.cart.quantity);

  const classNames = useCartModalButtonStyles();

  return (
    <div
      className={classNames.cartBtn}
      onClick={() => dispatch(setIsCartModalOpen(!isCartModalOpen))}
    >
      <img
        src={cartImg}
        alt="cart"
      />
      {/* COUNTER */}
      {quantity > 0
        ? <div className={classNames.counter}>{quantity}</div>
        : null}
    </div >
  );
}

export default CartModalButton;