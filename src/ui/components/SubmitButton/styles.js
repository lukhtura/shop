import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(theme => ({
  button: {
    position: "relative",
    background: theme.colors.primary,
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      background: theme.colors.primaryHover
    },

    "&:disabled": {
      background: "#d1ded4",
      pointerEvents: "none"
    },
  }
}));