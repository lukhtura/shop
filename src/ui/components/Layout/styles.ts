import { createUseStyles } from "react-jss";
import { Theme } from "theme";


const useLayoutStyles = createUseStyles((theme: Theme) => ({
  content: {
    maxWidth: "1440px",
    margin: "0 auto",
  },

  // [`@media(max-width: ${theme.breakpoints.xl})`]: {
  //   content: {
  //     padding: "0 50px",
  //   }
  // },

  [`@media(max-width: ${theme.breakpoints.md})`]: {
    content: {
      margin: "30px auto 0",
    }
  },

  // [`@media(max-width: ${theme.breakpoints.xs})`]: {
  //   content: {
  //     padding: "0 20px",
  //   }
  // }
}));

export default useLayoutStyles;