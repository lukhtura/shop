import { createUseStyles } from 'react-jss';

const useHeaderCategoriesDropdownButtonStyles = createUseStyles(() => ({
  button: {
    width: '54px',
    paddingLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

export default useHeaderCategoriesDropdownButtonStyles;
