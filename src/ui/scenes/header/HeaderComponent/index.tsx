//Core
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "engine/hooks/useMediaQuery";
import { useLayoutEffect, useRef } from "react";

//Actions
import { setHeaderHeight } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories/";
import DropdownCurrencySelector from "ui/scenes/header/DropdownCurrencySelector/";
import CartModal from "ui/scenes/cart/CartModal/";
import HeaderCategoriesDropdownButton from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownButton";

//Styles
import { useStyles } from "./styles";
import logo from "assets/img/green-logo.svg";



function Header() {

  const dispatch = useAppDispatch();
  const filterContainerWidth = useAppSelector(state => state.header.filterContainerWidth);

  const classNames = useStyles();

  const headerRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery("(max-width: 960px)");

  useLayoutEffect(() => {
    if (headerRef.current) {
      dispatch(setHeaderHeight(`${headerRef.current.offsetHeight}px`));
    }
  }, [dispatch, isMobile])

  return (
    <header
      ref={headerRef}
      className={classNames.header}>
      <div className={classNames.inner}>

        {isMobile ? <HeaderCategoriesDropdownButton /> : <HeaderCategories />}


        {/* LOGO */}
        <RouterLink to={"./"} className={classNames.logo}>
          <img
            src={logo}
            alt="logotype"
          />
        </RouterLink>
        {/* LOGO */}

        <div
          className={classNames.buttonsContainer}
          style={{ width: filterContainerWidth }}>
          <DropdownCurrencySelector />
          <CartModal />
        </div>
      </div>
    </header>
  );
}

export default Header;