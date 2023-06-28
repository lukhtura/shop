//Core
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

//Actions
import { setIsCategoriesDropdownMenuOpen } from "engine/redux/slices/headerSlice";

//Components
import HeaderCategories from "ui/scenes/header/HeaderCategories"

//Styles
import useHeaderCategoriesDropdownContentStyles from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownContent/styles";



const HeaderCategoriesDropdownContent: React.FC = () => {

  const dispatch = useAppDispatch();
  const { headerHeight, isCategoriesDropdownMenuOpen } = useAppSelector(state => state.header)

  const classNames = useHeaderCategoriesDropdownContentStyles();

  const containerRef = useRef<HTMLDivElement | null>(null);

  if (isCategoriesDropdownMenuOpen && containerRef.current) return (
    <div
      className={classNames.wrapper}
      onMouseEnter={() => dispatch(setIsCategoriesDropdownMenuOpen(true))}
      onMouseLeave={() => dispatch(setIsCategoriesDropdownMenuOpen(false))}
      ref={containerRef}
      style={
        !isCategoriesDropdownMenuOpen && containerRef.current.offsetHeight
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