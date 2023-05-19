//Core
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setIsCategoriesDropdownmenuOpen } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories"

//Styles
import { useStyles } from "./styles";



function HeaderCategoriesDropdownContent() {

  const dispatch = useDispatch();
  const { headerHeight, isCategoriesDropdownmenuOpen } = useSelector(state => state.header)

  const classes = useStyles();

  const containerRef = useRef();

  if (isCategoriesDropdownmenuOpen) return (
    <div
      className={classes.wrapper}
      onMouseEnter={() => dispatch(setIsCategoriesDropdownmenuOpen(true))}
      onMouseLeave={() => dispatch(setIsCategoriesDropdownmenuOpen(false))}
      ref={containerRef}
      style={
        !isCategoriesDropdownmenuOpen && containerRef.current?.offsetHeight
          ? { top: -(containerRef.current.offsetHeight - headerHeight) }
          : { top: headerHeight }
      }
    >
      <HeaderCategories />
    </div>
  );
}

export default HeaderCategoriesDropdownContent;