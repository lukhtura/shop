// Core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';

// Actions
import { setIsCategoriesDropdownMenuOpen } from 'engine/redux/slices/headerSlice';

// Components
import IconButton from 'ui/components/IconButton/IconButton';

// Styles
import useHeaderCategoriesDropdownButtonStyles from 'ui/scenes/header/HeaderDropdownCategories/HeaderCategoriesDropdownButton/styles';
import hamburgerIcon from 'assets/icons/hamburger.svg';

const HeaderCategoriesDropdownButton = () => {
  const dispatch = useAppDispatch();
  const isCategoriesDropdownMenuOpen = useAppSelector(
    (state) => state.header.isCategoriesDropdownMenuOpen
  );

  const classNames = useHeaderCategoriesDropdownButtonStyles();

  return (
    <IconButton
      onClick={() =>
        dispatch(setIsCategoriesDropdownMenuOpen(!isCategoriesDropdownMenuOpen))
      }
      alt="menu"
      className={classNames.button}
    >
      {hamburgerIcon}
    </IconButton>
  );
};

export default HeaderCategoriesDropdownButton;
