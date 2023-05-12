//Core
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

//Components
import HeaderCategories from "src/ui/components/HeaderCategories";
import DropdownCurrencySelector from "src/ui/components/DropdownCurrencySelector";
import CartModal from "src/ui/components/CartModal/";

//Styles
import { useStyles } from "./styles";
import logo from "src/assets/img/green-logo.svg";




function Header() {

  /* STATE */
  const filterContainerWidth = useSelector(state => state.header.filterContainerWidth);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */



  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <HeaderCategories />

        {/* LOGO */}
        <RouterLink to={"./"} className={classes.logo}>
          <img
            src={logo}
            alt="logotype"
          />
        </RouterLink>

        <div
          className={classes.buttonsContainer}
          style={{ width: filterContainerWidth }}>
          <DropdownCurrencySelector />
          <CartModal />
        </div>
      </div>
    </header>
  );
}

export default Header;
