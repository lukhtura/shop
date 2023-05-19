//Core
import { useSelector } from "react-redux";

//Styles
import { useStyles } from "./styles";
import currencySelectorArrow from "assets/icons/selector-arrow.svg";



function DropdownButton() {

  /*  */
  const { isCurrencySelectorOpen, currencySelected } = useSelector(state => state.header);
  /*  */

  /**/
  const classes = useStyles();
  /**/

  return (
    <div className={`${classes.currencySelectorBtn}`}>

      {/* CURRENCY SYMBOL */}
      <div>
        {currencySelected.symbol}
      </div>

      {/* OPEN CLOSE ARROW */}
      <div className={isCurrencySelectorOpen
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