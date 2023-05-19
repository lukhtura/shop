//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";
import cartImg from "assets/icons/cart-icon.svg";


function CartModalButton() {

  /*  */
  const dispatch = useDispatch();
  const { isCartModalOpen } = useSelector(state => state.header);
  const quantity = useSelector(state => state.cart.quantity);
  /*  */

  /**/
  const classes = useStyles();
  /**/

  return (
    <div
      className={classes.cartBtn}
      onClick={() => dispatch(setIsCartModalOpen(!isCartModalOpen))}
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