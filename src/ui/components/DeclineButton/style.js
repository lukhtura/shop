import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(theme => ({
  removeBtn: {
    backgroundColor: theme.colors.danger,
    border: "none",
    cursor: "pointer",
    color: "white",

    "&:hover": {
      backgroundColor: "#ff4c4c",
    },
  },
}));