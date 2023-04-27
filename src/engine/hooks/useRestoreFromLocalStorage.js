//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { restoreCartFromLocalStorage } from "src/redux/slices/cartSlice";
import { changeCurrency } from "src/redux/slices/headerSlice";

function useRestoreFromLocalStorage() {

  const dispatch = useDispatch();

  /* CART ITEMS */
  const cartItemsFromLocalStorage = window.localStorage.getItem("CART_ITEMS");
  if (cartItemsFromLocalStorage !== null) {
    dispatch(restoreCartFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
  }
  /* CART ITEMS */

  /* SELECTED CURRENCY */
  const currencySelectedFromLocalStorage = window.localStorage.getItem("CURRENCY_SELECTED");
  if (currencySelectedFromLocalStorage !== null) {
    dispatch(changeCurrency(JSON.parse(currencySelectedFromLocalStorage)));
  }
  /* SELECTED CURRENCY */
}

export default useRestoreFromLocalStorage;