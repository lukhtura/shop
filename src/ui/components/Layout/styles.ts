import { createUseStyles } from "react-jss";


const useLayoutStyles = createUseStyles(theme => ({
  content: {
    maxWidth: "1440px",
    margin: "80px auto 0",
  },

  // [`@media(max-width: ${theme.breakpoints.xl})`]: {
  //   content: {
  //     padding: "0 50px",
  //   }
  // },

  // [`@media(max-width: ${theme.breakpoints.lg})`]: {
  //   content: {
  //     padding: "0 100px",
  //   }
  // },

  // [`@media(max-width: ${theme.breakpoints.xs})`]: {
  //   content: {
  //     padding: "0 20px",
  //   }
  // }
}));

export default useLayoutStyles;