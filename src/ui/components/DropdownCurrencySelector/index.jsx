//Core
import { useDispatch } from "react-redux";

//Actions
import { setIsCurrencySelectorOpen } from "src/redux/slices/headerSlice";

//Components
import DropdownContent from "./DropdownContent";
import DropdownButton from "./DropdownButton";

//Styles
import { useStyles } from "./styles";



function DropdownCurrencySelectorNew() {

  const dispatch = useDispatch();

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

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

export default DropdownCurrencySelectorNew;