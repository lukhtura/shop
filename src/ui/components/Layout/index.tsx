// Core
import { useAppSelector } from "engine/redux/hooks";

// Components
import { Outlet } from "react-router-dom";
import Header from "ui/scenes/header/HeaderComponent";
import HeaderCategoriesDropdownContent from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownContent";
import ConfirmationOrderModal from "ui/scenes/cart/ConfirmationOrderModal";
import OrderMessage from "ui/components/OrderMessage";

// Utils
import ScrollToTop from "utils/scrollToTop";

// Styles
import useLayoutStyles from "ui/components/Layout/styles";

const Layout = () => {

  const isMobile = useAppSelector(state => state.technical.isMobile);

  const classNames = useLayoutStyles();

  return (
    <>
      {/* HEADER */}
      < Header />
      {
        isMobile && <HeaderCategoriesDropdownContent />
      }
      {/* HEADER */}
      <OrderMessage />
      <div
        className={classNames.content}>
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
        <ConfirmationOrderModal />
      </div>
    </>
  );
}

export default Layout;