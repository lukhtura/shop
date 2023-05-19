//Core
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useMediaQuery from "engine/hooks/useMediaQuery";

//Actions
import { setIsCurrencySelectorOpen } from "engine/redux/slices/headerSlice";

//Components
import Header from "ui/scenes/header/HeaderComponent";
import HeaderCategoriesDropdownContent from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownContent";

//Utils
import ScrollToTop from "utils/scrollToTop";

//Styles
import { useStyles } from "./styles";



function Layout() {

  const dispatch = useDispatch();
  const { isCurrencySelectorOpen } = useSelector(state => state.header);

  const isMobile = useMediaQuery('(max-width: 960px)');
  const classes = useStyles();


  return (
    <div >
      <div
        className={classes.layout}
        onClick={() => { if (isCurrencySelectorOpen) dispatch(setIsCurrencySelectorOpen(false)) }}>

        {/* HEADER */}
        <Header />
        {isMobile ? <HeaderCategoriesDropdownContent /> : null}
        {/* HEADER */}

        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </div>
    </div>
  );
}

export default Layout;