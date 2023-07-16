// Core
import { useAppSelector, useAppDispatch } from "engine/redux/hooks";

// Utils
import { countTotalPriceOfCart } from "utils/totalPriceCounter";

// Actions
import { setIsConfirmationOrderModalOpen } from "engine/redux/slices/cartSlice";

// Components
import SubmitButton from "ui/components/SubmitButton";

// Styles
import useCartPageTotalModuleStyles from "ui/scenes/cart/CartPageTotalModule/styles";

const CartPageTotalModule = () => {

  const dispatch = useAppDispatch();
  const { quantity, itemsInCart } = useAppSelector(state => state.cart);
  const currencySelected = useAppSelector(state => state.header.currencySelected);

  const classNames = useCartPageTotalModuleStyles();

  /* TAXES */
  const taxesProcent = 21;
  const countTaxes = (procent: number, price: number): number => {
    const res = price / 100 * procent;
    return +res.toFixed(2);
  }
  /* TAXES */

  return (
    <div className={classNames.totalModule}>
      {/* TAXES */}
      <p className={classNames.permanentText}>Tax {taxesProcent}%: <span className={classNames.dynamicText}>{currencySelected.symbol}{countTaxes(taxesProcent, countTotalPriceOfCart(itemsInCart, currencySelected))}</span></p>
      {/* QUANTITY */}
      <p className={classNames.permanentText}>Quantity: <span className={classNames.dynamicText}>{quantity}</span></p>
      {/* TOTAL PRICE */}
      <p className={classNames.permanentText}>Total: <span className={classNames.dynamicText}>{currencySelected.symbol}{countTotalPriceOfCart(itemsInCart, currencySelected)}</span></p>
      <SubmitButton
        onClick={() => dispatch(setIsConfirmationOrderModalOpen(true))}
        className={classNames.orderBtn}
      >
        ORDER
      </SubmitButton>
    </div>
  )
}

export default CartPageTotalModule;