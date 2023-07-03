//Core
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
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
import { countTotalPriceOfCart } from "utils/totalPriceCounter";

//Style
import useCartModalContentStyles from "ui/scenes/cart/CartModal/CartModalContent/styles";




function CartModalContent() {

  const dispatch = useAppDispatch();
  const { currencySelected, isCartModalOpen } = useAppSelector(state => state.header);
  const { quantity, itemsInCart } = useAppSelector(state => state.cart);

  const classNames = useCartModalContentStyles();

  function showConfirmationOrderModal(): void {
    dispatch(setIsConfirmationOrderModalOpen(true));
  }

  function closeModal(): void {
    dispatch(setIsCartModalOpen(false))
  }

  function showCartModalEmptyMessageWithTimeout(delay: number): JSX.Element {
    const message = <p className={classNames.emptyMessage}>Your cart is empty</p>;

    const timerID = setTimeout(() => {
      dispatch(setIsCartModalOpen(false));
      clearTimeout(timerID);
    }, delay);

    return message;
  }

  function handleEscapeKeyListener(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  function enableScroll(): void {
    document.body.style.overflow = "auto"
  }

  function disableScroll(): void {
    document.body.style.overflow = "hidden"
  }

  useEffect(() => {
    if (isCartModalOpen) {
      window.addEventListener("keydown", handleEscapeKeyListener);
      disableScroll()
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyListener);
      enableScroll();
    };
  }, []);

  if (!isCartModalOpen) return null;

  const view = (
    <div
      onClick={closeModal}
      className={classNames.modalOverflow} >

      <div onClick={e => e.stopPropagation()} className={classNames.modalContent}>

        <CloseButton onClick={closeModal} />

        {
          quantity === 0
            ? showCartModalEmptyMessageWithTimeout(2500)
            : (
              <>
                <div className={classNames.headerContainer}>
                  <h3>My Bag<span className={classNames.itemsQuantity}>, {quantity} {quantity === 1 ? "item" : "items"}</span></h3>

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
                  <p className={classNames.totalPriceText}>{currencySelected.symbol}{countTotalPriceOfCart(itemsInCart, currencySelected)}</p>
                </div>

                <div className={classNames.buttonContainer}>
                  {/* GO TO CART BUTTON */}
                  <Link
                    to={"/cart"}
                    onClick={closeModal}>
                    <button className={`${classNames.button} ${classNames.viewBtn}`}>VIEW BAG</button>
                  </Link>

                  {/* CHECK OUT BUTTON */}
                  <SubmitButton
                    onClick={showConfirmationOrderModal}
                    className={classNames.button}
                    disabled={quantity === 0}>
                    CHECK OUT
                  </SubmitButton>
                </div>
              </>
            )}
      </div>
    </div >
  );

  return ReactDOM.createPortal(view, document.getElementById("modal") as Element);
}

export default CartModalContent;