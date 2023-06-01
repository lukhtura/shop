//Core
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { useEffect } from "react";

//Actions
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";

//Components
import CartList from "ui/scenes/cart/CartList";
import SubmitButton from "ui/components/SubmitButton";
import RemoveItemsButton from "../../RemoveItemsButton/RemoveItemsButton";

//Utils
import { countTotalPrice } from "utils/totalPriceCounter";

//Style
import { useStyles } from "./styles";
import closeIcon from "assets/icons/close.png"



function CartModalContent() {

  const dispatch = useDispatch();
  const currencySelected = useSelector(state => state.header.currencySelected);
  const isCartModalOpen = useSelector(state => state.header.isCartModalOpen);
  const { quantity, itemsInCart } = useSelector(state => state.cart);

  const classes = useStyles();

  useEffect(() => {
    /* CLOSE MODAL ON ESC BUTTON */
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        dispatch(setIsCartModalOpen(false));
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);

  function CloseEmptyCartModalAuto() {
    setTimeout(() => {
      dispatch(setIsCartModalOpen(false));
    }, 2000);
    return <div className={classes.emptyMessage}>Your cart is empty</div>
  }

  if (!isCartModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={() => dispatch(setIsCartModalOpen(!isCartModalOpen))}
      className={classes.modalOverflow} >

      <div onClick={e => e.stopPropagation()} className={classes.modalContent}>

        {/* CLOSE BUTTON */}
        <div
          className={classes.closeButton}
          onClick={() => dispatch(setIsCartModalOpen(false))}>
          <img src={closeIcon} alt="close" />
        </div>

        {
          quantity === 0
            ? CloseEmptyCartModalAuto()
            : (
              <>
                <div className={classes.headerContainer}>
                  <h3 className={classes.header}>My Bag<span className={classes.itemsQuantity}>, {quantity} items</span></h3>
                  <RemoveItemsButton />
                </div>
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
                    onClick={() => { dispatch(setIsCartModalOpen(!isCartModalOpen)) }}>
                    <button className={`${classes.button} ${classes.viewBtn}`}>VIEW BAG</button>
                  </Link>

                  {/* CHECK OUT BUTTON */}
                  <SubmitButton
                    className={`${classes.button} ${classes.checkoutBtn}`}
                    disabled={quantity === 0}>
                    CHECK OUT
                  </SubmitButton>
                </div>
              </>
            )}



      </div>
    </div >,
    document.getElementById("modal")
  );
}

export default CartModalContent;