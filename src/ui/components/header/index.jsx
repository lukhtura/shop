//Core
import { Link as RouterLink } from "react-router-dom";

//Components
import HeaderCategories from "src/ui/components/HeaderCategories";
import CurrencySelectorHeaderButton from "src/ui/components/CurrencySelectorHeaderButton";
import CartModalHeaderButton from "src/ui/components/CartModalHeaderButton";

//Styles
import { useStyles } from "./styles";
import logo from "src/assets/img/green-logo.svg";



function Header() {

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

        <div className={classes.buttonsContainer}>
          <CurrencySelectorHeaderButton />
          <CartModalHeaderButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
