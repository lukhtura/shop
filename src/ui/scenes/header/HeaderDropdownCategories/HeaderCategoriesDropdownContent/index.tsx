//Core
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

//Actions
import { setIsCategoriesDropdownMenuOpen } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories";

//Styles
import useHeaderCategoriesDropdownContentStyles from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownContent/styles";

const HeaderCategoriesDropdownContent = () => {

  const dispatch = useAppDispatch();
  const isCategoriesDropdownMenuOpen = useAppSelector(state => state.header.isCategoriesDropdownMenuOpen);
  const headerHeight = useAppSelector(state => state.technical.headerHeight);

  const classNames = useHeaderCategoriesDropdownContentStyles();

  const containerRef = useRef<HTMLDivElement | null>(null);

  if (isCategoriesDropdownMenuOpen) return (
    <div
      className={classNames.overflow}
      onClick={() => dispatch(setIsCategoriesDropdownMenuOpen(false))}
    >
      <div
        className={classNames.wrapper}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => dispatch(setIsCategoriesDropdownMenuOpen(true))}
        onMouseLeave={() => dispatch(setIsCategoriesDropdownMenuOpen(false))}
        ref={containerRef}
        style={
          !isCategoriesDropdownMenuOpen && containerRef.current
            ? { top: -(containerRef.current.offsetHeight - parseInt(headerHeight)) }
            : { top: headerHeight }
        }
      >
        <HeaderCategories />
      </div>
    </div>
  );

  return null;
}

export default HeaderCategoriesDropdownContent;