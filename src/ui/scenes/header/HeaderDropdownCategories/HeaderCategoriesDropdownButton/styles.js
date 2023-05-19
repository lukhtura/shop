import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },

  [`@media(max-width: ${theme.breakpoints.xl})`]: {
    container: {
      marginLeft: "20px",
      cursor: "pointer",
    },
  },
}));