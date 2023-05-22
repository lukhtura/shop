import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px",
    flexWrap: "wrap"
  },


  [`@media(max-width: ${theme.breakpoints.xl})`]: {
    container: {
      gap: "20px",
    },
  },

  [`@media(max-width: ${theme.breakpoints.lg})`]: {
    container: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));