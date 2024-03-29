import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const usePageNotFoundStyles = createUseStyles({
  container: {
    textAlign: "center"
  },
  message: {
    fontWeight: "bold",
    fontSize: "24px",
    marginTop: "100px"
  }
});

export default usePageNotFoundStyles;