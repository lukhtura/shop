// Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";

// Actions
import { setIsCategoriesDropdownMenuOpen } from "engine/redux/slices/headerSlice";

// Styles
import useHeaderCategoriesDropdownButtonStyles from "ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownButton/styles";
import theme from "theme";

const HeaderCategoriesDropdownButton = () => {

  const dispatch = useAppDispatch();
  const isCategoriesDropdownMenuOpen = useAppSelector(state => state.header.isCategoriesDropdownMenuOpen)

  const classNames = useHeaderCategoriesDropdownButtonStyles();

  function controlMouse(boolean: boolean): void {
    dispatch(setIsCategoriesDropdownMenuOpen(boolean));
  }

  return (
    <div
      onTouchStart={() => controlMouse(!isCategoriesDropdownMenuOpen)}
      onMouseEnter={() => controlMouse(true)}
      onMouseLeave={() => controlMouse(false)}
      className={classNames.container}
    >
      <svg
        style={{
          cursor: "pointer"
        }}
        fill={isCategoriesDropdownMenuOpen ? theme.colors.primary : "black"}
        width={isCategoriesDropdownMenuOpen ? "34px" : "32px"}
        height={isCategoriesDropdownMenuOpen ? "34px" : "32px"}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" > <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
      </svg >
    </div>
  );
}

export default HeaderCategoriesDropdownButton;