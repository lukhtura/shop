// Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

// Actions
import { setIsCurrencySelectorOpen } from "engine/redux/slices/headerSlice";

// Components
import DropdownCurrencySelectorContent from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorContent/";
import DropdownCurrencySelectorButton from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorButton";

// Styles
import useDropdownCurrencySelectorStyles from "ui/scenes/header/DropdownCurrencySelector/styles";

const DropdownCurrencySelector = () => {

  const dispatch = useAppDispatch();
  const isCurrencySelectorOpen = useAppSelector(state => state.header.isCurrencySelectorOpen);

  const classNames = useDropdownCurrencySelectorStyles();

  return (
    <div
      onMouseEnter={() => dispatch(setIsCurrencySelectorOpen(true))}
      onMouseLeave={() => dispatch(setIsCurrencySelectorOpen(false))}
      onTouchStart={() => dispatch(setIsCurrencySelectorOpen(!isCurrencySelectorOpen))}
      className={classNames.container}
    >
      <DropdownCurrencySelectorButton />
      <DropdownCurrencySelectorContent />
    </div>
  );
}

export default DropdownCurrencySelector;