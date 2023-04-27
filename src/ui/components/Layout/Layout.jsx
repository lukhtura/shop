//Core
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useState } from "react";

//Actions
import { toggleCurrencySelector } from "src/redux/slices/headerSlice";

//Components
import Header from "src/ui/components/Header";
import CartModal from "src/ui/components/CartModal";
import CurrencySelector from "src/ui/components/CurrencySelector";

//Utils
import ScrollToTop from "src/utils/scrollToTop";

//Styles
import { useStyles } from "./styles";



function Layout() {

  /* STATE */
  const dispatch = useDispatch();
  const { currencySelectorOpen } = useSelector(state => state.header);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  /* PRELOADER */
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 500);
  }
  /* PRELOADER */

  return (
    !loading && (<div >
      <div
        className={classes.layout}
        onClick={() => { if (currencySelectorOpen) dispatch(toggleCurrencySelector(false)) }}>

        {/* HEADER */}
        <Header />
        <CurrencySelector />
        <CartModal />
        {/* HEADER */}

        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </div>
    </div>)
  );
}

export default Layout;