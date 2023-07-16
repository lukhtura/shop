import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useLayoutStyles = createUseStyles((theme: Theme) => ({
  content: {
    maxWidth: "1440px",
    margin: "0 auto",
  },

  [`@media(min-width: ${theme.breakpoints.xxl})`]: {
    content: {
      maxWidth: "1720px"
    }
  }

}));

export default useLayoutStyles;