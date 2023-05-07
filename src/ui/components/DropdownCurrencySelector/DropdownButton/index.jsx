//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { toggleCurrencySelector } from "src/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";
import currencySelectorArrow from "src/assets/icons/selector-arrow.svg";



function DropdownButton() {

  /* STATE */
  const dispatch = useDispatch();
  const { currencySelectorOpen, currencySelected } = useSelector(state => state.header);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div onClick={() => dispatch(toggleCurrencySelector(!currencySelectorOpen))} className={`${classes.currencySelectorBtn}`}>

      {/* CURRENCY SYMBOL */}
      <div>
        {currencySelected.symbol}
      </div>

      {/* OPEN CLOSE ARROW */}
      <div className={currencySelectorOpen
        ? classes.currencyArrowOpen
        : classes.currencyArrow} >
        <img
          src={currencySelectorArrow}
          alt="selector"
          className={classes.currencyArrowImg} />
      </div>
    </div>
  );
}

export default DropdownButton;