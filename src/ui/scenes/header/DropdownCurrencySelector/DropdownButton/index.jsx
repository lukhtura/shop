//Core
import { useSelector } from "react-redux";

//Styles
import { useStyles } from "./styles";
import currencySelectorArrow from "assets/icons/selector-arrow.svg";



function DropdownButton() {

  const { isCurrencySelectorOpen, currencySelected } = useSelector(state => state.header);

  const classNames = useStyles();

  return (
    <div className={`${classNames.currencySelectorBtn}`}>

      {/* CURRENCY SYMBOL */}
      <div>
        {currencySelected.symbol}
      </div>

      {/* OPEN CLOSE ARROW */}
      <div className={isCurrencySelectorOpen
        ? classNames.currencyArrowOpen
        : classNames.currencyArrow} >
        <img
          src={currencySelectorArrow}
          alt="selector"
          className={classNames.currencyArrowImg} />
      </div>
    </div>
  );
}

export default DropdownButton;