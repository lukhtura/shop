import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles((theme) => ({
  content: {
    padding: "0 100px",
    maxWidth: "1440px",
    margin: "0 auto",
  },

  [`@media(max-width: ${theme.breakpoints.xl})`]: {
    content: {
      padding: "0 50px",
    }
  },

  [`@media(max-width: ${theme.breakpoints.lg})`]: {
    content: {
      padding: "0 100px",
    }
  }
}));