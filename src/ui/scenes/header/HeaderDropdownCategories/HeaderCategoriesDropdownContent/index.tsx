//Core
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

//Actions
import { setIsCategoriesDropdownmenuOpen } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories"

//Styles
import { useStyles } from "./styles";



const HeaderCategoriesDropdownContent: React.FC = () => {

  const dispatch = useAppDispatch();
  const { headerHeight, isCategoriesDropdownmenuOpen } = useAppSelector(state => state.header)

  const classNames = useStyles();

  const containerRef = useRef();

  if (isCategoriesDropdownmenuOpen) return (
    <div
      className={classNames.wrapper}
      onMouseEnter={() => dispatch(setIsCategoriesDropdownmenuOpen(true))}
      onMouseLeave={() => dispatch(setIsCategoriesDropdownmenuOpen(false))}
      ref={containerRef}
      style={
        !isCategoriesDropdownmenuOpen && containerRef.current?.offsetHeight
          ? { top: -(containerRef.current.offsetHeight - parseInt(headerHeight)) }
          : { top: headerHeight }
      }
    >
      <HeaderCategories />
    </div>
  );

  return null;
}

export default HeaderCategoriesDropdownContent;