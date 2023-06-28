//Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "engine/hooks/useMediaQuery";
import { useLayoutEffect, useRef } from "react";

//Actions
import { setHeaderHeight, setActiveCategory } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories/";
import DropdownCurrencySelector from "ui/scenes/header/DropdownCurrencySelector/";
import CartModal from "ui/scenes/cart/CartModal/";
import HeaderCategoriesDropdownButton from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownButton";

//Styles
import useHeaderStyles from "ui/scenes/header/HeaderComponent/styles";
import logo from "assets/img/green-logo.svg";



const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const categoryContainerWidth = useAppSelector(state => state.header.categoryContainerWidth);

  const classNames = useHeaderStyles();

  const headerRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery("(max-width: 960px)");

  useLayoutEffect(() => {
    if (headerRef.current) {
      dispatch(setHeaderHeight(`${headerRef.current.offsetHeight}px`));
    }
  }, [isMobile, headerRef.current])

  return (
    <header
      ref={headerRef}
      className={classNames.header}>
      <div className={classNames.inner}>

        {isMobile ? <HeaderCategoriesDropdownButton /> : <HeaderCategories />}


        {/* LOGO */}
        <RouterLink
          to={"./"}
          className={classNames.logo}>
          <img
            src={logo}
            alt="logotype"
            onClick={() => dispatch(setActiveCategory("all"))}
          />
        </RouterLink>
        {/* LOGO */}

        <div
          className={classNames.buttonsContainer}
          style={{ width: categoryContainerWidth }}>
          <DropdownCurrencySelector />
          <CartModal />
        </div>
      </div>
    </header>
  );
}

export default Header;
