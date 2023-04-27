//Core
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { toggleCartModal } from "src/redux/slices/headerSlice";

//Components
import CartList from "src/ui/components/CartList";
import SubmitButton from "src/ui/components/SubmitButton";

//Utils
import { countTotalPrice } from "src/utils/totalPriceCounter";

//Style
import { useStyles } from "./styles";



function CartModal() {

  /* STATE */
  const dispatch = useDispatch();
  const currencySelected = useSelector(state => state.header.currencySelected);
  const cartModalOpened = useSelector(state => state.header.cartModalOpened);
  const { quantity, itemsInCart } = useSelector(state => state.cart);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div
      onClick={() => dispatch(toggleCartModal(!cartModalOpened))}
      className={cartModalOpened
        ? classes.modalOverflow
        : `${classes.modalOverflow} ${classes.displayNone}`} >

      <div onClick={e => e.stopPropagation()} className={classes.modal}>

        <div>
          <h3 className={classes.header}>My Bag<span className={classes.itemsQuantity}>, {quantity} items</span></h3>
          <div className={classes.cartListContainer}>
            <CartList data={itemsInCart} />
          </div>

          {/* PRICE */}
          <div className={classes.totalPriceContainer}>
            <p className={classes.totalPriceText}>Total</p>
            <p className={classes.totalPriceText}>{currencySelected.symbol}{countTotalPrice(itemsInCart, currencySelected)}</p>
          </div>

          <div className={classes.buttonContainer}>
            {/* GO TO CART BUTTON */}
            <Link
              to={"/cart"}
              onClick={() => { dispatch(toggleCartModal(!cartModalOpened)) }}>
              <button className={`${classes.button} ${classes.viewBtn}`}>VIEW BAG</button>
            </Link>

            {/* CHECK OUT BUTTON */}
            <SubmitButton
              className={`${classes.button} ${classes.checkoutBtn}`}
              label={"CHECK OUT"}
              disabled={quantity === 0} />
          </div>

        </div>
      </div>
    </div >
  );
}

export default CartModal;