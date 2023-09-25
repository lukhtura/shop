import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';

const useButtonStyles = createUseStyles((theme: Theme) => ({
  button: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',

    '&:active': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      background: '#d1ded4',
      pointerEvents: 'none',
    },
  },

  accept: {
    background: theme.colors.primary,

    '&:hover': {
      background: theme.colors.primaryHover,
    },
  },

  decline: {
    backgroundColor: theme.colors.danger,

    '&:hover': {
      backgroundColor: '#ff4c4c',
    },
  },

  secondary: {
    background: theme.colors.background,
    border: `1px solid ${theme.colors.text}`,
    color: '#000',

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
}));

export default useButtonStyles;
