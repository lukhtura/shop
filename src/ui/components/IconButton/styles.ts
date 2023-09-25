import { createUseStyles } from 'react-jss';

const useIconButtonStyles = createUseStyles({
  iconButton: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: '0.3s',

    '& img': {
      width: '100%',

      '&:hover': {
        filter: 'opacity(0.6)',
      },
    },

    '&:active': {
      transform: 'translateY(1px)',
    },
  },
});

export default useIconButtonStyles;
