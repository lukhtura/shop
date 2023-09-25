import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';

const useConfirmationOrderModalStyles = createUseStyles((theme: Theme) => ({
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
    backdropFilter: 'blur(2px)',
    // backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    position: 'relative',
    zIndex: theme.zIndex.modal,
    padding: '25px 15px 15px',
    maxWidth: '550px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  message: {
    margin: '0 0 15px 0',
    fontSize: '30px',
    fontWeight: '500',
  },
  btnsContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50px',
  },
  btn: {
    width: '30%',
    height: '30px',
    fontWeight: '600',
  },
}));

export default useConfirmationOrderModalStyles;
