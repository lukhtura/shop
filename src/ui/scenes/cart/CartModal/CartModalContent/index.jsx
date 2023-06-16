//Core
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { useEffect } from "react";

//Actions
import { setIsCartModalOpen } from "engine/redux/slices/headerSlice";
import { removeFromCart, setIsConfirmationOrderModalOpen } from "engine/redux/slices/cartSlice";

//Components
import CartList from "ui/scenes/cart/CartList";
import SubmitButton from "ui/components/SubmitButton";
import DeclineButton from "ui/components/DeclineButton";
import CloseButton from "ui/components/CloseButton/CloseButton";

//Utils
import { countTotalPrice } from "utils/totalPriceCounter";

//Style
import { useStyles } from "./styles";



function CartModalContent() {

  const dispatch = useDispatch();
  const currencySelected = useSelector(state => state.header.currencySelected);
  const isCartModalOpen = useSelector(state => state.header.isCartModalOpen);
  const { quantity, itemsInCart } = useSelector(state => state.cart);

  const classNames = useStyles();

  useEffect(() => {
    /* CLOSE MODAL ON ESC BUTTON */
    function handleEscape(event) {
      if (event.key === "Escape") {
        dispatch(setIsCartModalOpen(false));
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);

  function showCartModalEmptyMessageWithTimeout(delay) {
    const message = <p className={classNames.emptyMessage}>Your cart is empty</p>;

    const timerID = setTimeout(() => {
      dispatch(setIsCartModalOpen(false));
      clearTimeout(timerID);
    }, delay);

    return message;
  }

  function showConfirmationOrderModal() {
    dispatch(setIsConfirmationOrderModalOpen(true));
  }

  if (!isCartModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={() => dispatch(setIsCartModalOpen(!isCartModalOpen))}
      className={classNames.modalOverflow} >

      <div onClick={e => e.stopPropagation()} className={classNames.modalContent}>

        <CloseButton onClick={() => dispatch(setIsCartModalOpen(false))} />

        {
          quantity === 0
            ? showCartModalEmptyMessageWithTimeout(2500)
            : (
              <>
                <div className={classNames.headerContainer}>
                  <h3 className={classNames.header}>My Bag<span className={classNames.itemsQuantity}>, {quantity} {quantity === 1 ? "item" : "items"}</span></h3>

                  <DeclineButton
                    onClick={() => dispatch(removeFromCart("all"))}
                    className={classNames.removeBtn}>
                    Remove all
                  </DeclineButton>
                </div>

                <div className={classNames.cartListContainer}>
                  <CartList data={itemsInCart} />
                </div>

                {/* PRICE */}
                <div className={classNames.totalPriceContainer}>
                  <p className={classNames.totalPriceText}>Total</p>
                  <p className={classNames.totalPriceText}>{currencySelected.symbol}{countTotalPrice(itemsInCart, currencySelected)}</p>
                </div>

                <div className={classNames.buttonContainer}>
                  {/* GO TO CART BUTTON */}
                  <Link
                    to={"/cart"}
                    onClick={() => dispatch(setIsCartModalOpen(false))}>
                    <button className={`${classNames.button} ${classNames.viewBtn}`}>VIEW BAG</button>
                  </Link>

                  {/* CHECK OUT BUTTON */}
                  <SubmitButton
                    onClick={showConfirmationOrderModal}
                    className={`${classNames.button} ${classNames.checkoutBtn}`}
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