import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';

const useCartPageStyles = createUseStyles((theme: Theme) => ({
  cartPageContainer: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '0 50px',
  },
  headerContainer: {
    margin: '50px 0 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
  },
  removeBtn: {
    height: '25px',
    padding: '0 5px',
  },

  [`@media(max-width: ${theme.breakpoints.sm})`]: {
    cartPageContainer: {
      padding: '0 20px',
    },
  },

  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    cartPageContainer: {
      padding: '0 10px',
    },
    header: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '36px',
    },
    removeBtn: {
      height: '20px',
      padding: '0 5px',
    },
  },
}));

export default useCartPageStyles;
