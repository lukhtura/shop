//Core
import { useAppDispatch } from "engine/redux/hooks";

//Actions
import { setIsCurrencySelectorOpen } from "engine/redux/slices/headerSlice";

//Components
import DropdownCurrencySelectorContent from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorContent/";
import DropdownCurrencySelectorButton from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorButton";

//Styles
import useDropdownCurrencySelectorStyles from "ui/scenes/header/DropdownCurrencySelector/styles";



const DropdownCurrencySelector: React.FC = () => {

  const dispatch = useAppDispatch();

  const classNames = useDropdownCurrencySelectorStyles();

  return (
    <div
      onMouseEnter={() => dispatch(setIsCurrencySelectorOpen(true))}
      onMouseLeave={() => dispatch(setIsCurrencySelectorOpen(false))}
      className={classNames.container}>
      <DropdownCurrencySelectorButton />
      <DropdownCurrencySelectorContent />
    </div>
  );
}

export default DropdownCurrencySelector;