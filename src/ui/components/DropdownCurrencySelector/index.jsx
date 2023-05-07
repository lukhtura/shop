//Components
import DropdownContent from "./DropdownContent";
import DropdownButton from "./DropdownButton";

//Styles
import { useStyles } from "./styles";



function DropdownCurrencySelectorNew() {

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div className={classes.container}>
      <DropdownButton />
      <DropdownContent />
    </div>
  );
}

export default DropdownCurrencySelectorNew;