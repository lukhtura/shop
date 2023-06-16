//Core
import { useSelector } from "react-redux";

//Actions
import { countTotalPrice } from "utils/totalPriceCounter";

//Styles
import { useStyles } from "./styles";



function CartPageTotalModule() {

  /*  */
  const { quantity, itemsInCart } = useSelector(state => state.cart);
  const currencySelected = useSelector(state => state.header.currencySelected);
  /*  */

  /**/
  const classNames = useStyles();
  /**/

  /* TAXES */
  const taxesProcent = 21;
  const countTaxes = (procent, price) => {
    let res = price / 100 * procent;
    return res.toFixed(2);
  }
  /* TAXES */

  return (
    <>
      {/* TAXES */}
      <p className={classNames.permanentText}>Tax {taxesProcent}%: <span className={classNames.dynamicText}>{currencySelected.symbol}{countTaxes(taxesProcent, countTotalPrice(itemsInCart, currencySelected))}</span></p>
      {/* QUANTITY */}
      <p className={classNames.permanentText}>Quantity: <span className={classNames.dynamicText}>{quantity}</span></p>
      {/* TOTAL PRICE */}
      <p className={classNames.permanentText}>Total: <span className={classNames.dynamicText}>{currencySelected.symbol}{countTotalPrice(itemsInCart, currencySelected)}</span></p>
    </>
  );
}

export default CartPageTotalModule;