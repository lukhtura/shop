//Core
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useMediaQuery from "engine/hooks/useMediaQuery";

//Actions
import { setIsCurrencySelectorOpen } from "engine/redux/slices/headerSlice";

//Components
import Header from "ui/scenes/header/HeaderComponent";
import HeaderCategoriesDropdownContent from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownContent";
import ConfirmationOrderModal from "ui/scenes/cart/ConfirmationOrderModal";
import OrderMessage from "ui/components/OrderMessage";

//Utils
import ScrollToTop from "utils/scrollToTop";

//Styles
import { useStyles } from "./styles";



function Layout() {

  const dispatch = useDispatch();
  const { isCurrencySelectorOpen } = useSelector(state => state.header);

  const isMobile = useMediaQuery('(max-width: 960px)');
  const classNames = useStyles();


  return (
    <>
      {/* HEADER */}
      < Header />
      {isMobile ? <HeaderCategoriesDropdownContent /> : null
      }
      {/* HEADER */}
      <OrderMessage />
      <div
        className={classNames.content}
        onClick={() => { if (isCurrencySelectorOpen) dispatch(setIsCurrencySelectorOpen(false)) }}>
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
        <ConfirmationOrderModal />
      </div>
    </>
  );
}

export default Layout;