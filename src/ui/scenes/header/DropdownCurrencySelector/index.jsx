//Core
import { useDispatch } from "react-redux";

//Actions
import { setIsCurrencySelectorOpen } from "engine/redux/slices/headerSlice";

//Components
import DropdownContent from "./DropdownContent";
import DropdownButton from "./DropdownButton";

//Styles
import { useStyles } from "./styles";



function DropdownCurrencySelector() {

  const dispatch = useDispatch();

  /**/
  const classes = useStyles();
  /**/

  return (
    <div
      onMouseEnter={() => dispatch(setIsCurrencySelectorOpen(true))}
      onMouseLeave={() => dispatch(setIsCurrencySelectorOpen(false))}
      className={classes.container}>
      <DropdownButton />
      <DropdownContent />
    </div>
  );
}

export default DropdownCurrencySelector;