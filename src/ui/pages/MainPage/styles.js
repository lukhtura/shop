import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  header: {
    marginTop: "80px",
    fontSize: "42px",
    lineHeight: "160%",
    color: theme.colors.text
  },




  [`@media(max-width: ${theme.breakpoints.md})`]: {
    header: {
      marginTop: "40px",
      fontSize: "36px",
    },
  },

  [`@media(max-width: ${theme.breakpoints.xs})`]: {
    header: {
      fontSize: "32px",
    },
  },

}));