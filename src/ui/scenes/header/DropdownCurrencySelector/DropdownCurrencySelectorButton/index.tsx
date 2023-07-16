// Core
import { useAppSelector } from "engine/redux/hooks";

// Styles
import useDropdownCurrencySelectorButtonStyles from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorButton/styles";
import currencySelectorArrow from "assets/icons/selector-arrow.svg";

const DropdownCurrencySelectorButton = () => {

  const { isCurrencySelectorOpen, currencySelected } = useAppSelector(state => state.header);

  const classNames = useDropdownCurrencySelectorButtonStyles();

  const arrowClassName: string = isCurrencySelectorOpen
    ? classNames.currencyArrowOpen
    : classNames.currencyArrow;

  return (
    <div className={classNames.currencySelectorBtn}>

      {/* CURRENCY SYMBOL */}
      <div>
        {currencySelected.symbol}
      </div>

      {/* OPEN CLOSE ARROW */}
      <div className={arrowClassName} >
        <img
          src={currencySelectorArrow}
          alt="selector"
          className={classNames.currencyArrowImg} />
      </div>

    </div>
  );
}

export default DropdownCurrencySelectorButton;