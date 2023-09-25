import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';

const useCartModalContentStyles = createUseStyles((theme: Theme) => ({
  modalOverflow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: theme.zIndex.modal,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    position: 'relative',
    zIndex: theme.zIndex.modal,
    padding: '5px 15px',
    minWidth: '550px',
    maxWidth: '600px',
    backgroundColor: 'white',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 0',
  },
  itemsQuantity: {
    fontWeight: '500',
    fontSize: '16px',
  },
  cartListContainer: {
    width: '100%',
    maxHeight: '50vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    overflow: 'auto',
  },
  totalPriceContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalPriceText: {
    margin: '0',
    fontWeight: '700',
  },
  buttonsContainer: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '293px',
  },
  button: {
    width: '140px',
    height: '43px',
    cursor: 'pointer',
  },
  viewBtn: {
    transition: '0.3s',
    background: theme.colors.background,
    border: `1px solid ${theme.colors.text}`,

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  removeBtn: {
    marginRight: '20px',
    height: '25px',
    padding: '0 5px',
  },
  closeBtn: {
    position: 'absolute',
    width: '13px',
    top: '5px',
    right: '5px',
  },
  emptyMessage: {
    padding: '10px',
  },

  [`@media(max-width: ${theme.breakpoints.md})`]: {
    modalContent: {
      minWidth: '50%',
      maxWidth: '80%',
    },
  },

  [`@media(max-width: ${theme.breakpoints.md})`]: {
    modalContent: {
      minWidth: '50%',
      maxWidth: '80%',
    },
  },

  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    buttonsContainer: {
      minWidth: 'auto',
    },
    button: {
      width: '100px',
    },
  },
}));

export default useCartModalContentStyles;
