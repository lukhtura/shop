//Core
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

//Actions
import { setIsCurrencySelectorOpen } from "src/redux/slices/headerSlice";

//Components
import Header from "src/ui/components/Header";

//Utils
import ScrollToTop from "src/utils/scrollToTop";

//Styles
import { useStyles } from "./styles";



function Layout() {

  /* STATE */
  const dispatch = useDispatch();
  const { isCurrencySelectorOpen } = useSelector(state => state.header);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div >
      <div
        className={classes.layout}
        onClick={() => { if (isCurrencySelectorOpen) dispatch(setIsCurrencySelectorOpen(false)) }}>

        {/* HEADER */}
        <Header />
        {/* HEADER */}

        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </div>
    </div>
  );
}

export default Layout;