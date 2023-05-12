//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { toggleCartModal } from "src/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";
import cartImg from "src/assets/icons/cart-icon.svg";


function CartModalButton() {

  /* STATE */
  const dispatch = useDispatch();
  const { isCartModalOpen } = useSelector(state => state.header);
  const quantity = useSelector(state => state.cart.quantity);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div
      className={classes.cartBtn}
      onClick={() => dispatch(toggleCartModal(!isCartModalOpen))}
    >
      <img
        src={cartImg}
        alt="cart"
      />
      {/* COUNTER */}
      {quantity > 0
        ? <div className={classes.counter}>{quantity}</div>
        : null}
    </div >
  );
}

export default CartModalButton;