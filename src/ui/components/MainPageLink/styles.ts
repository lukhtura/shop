import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useMainPageLinkStyles = createUseStyles((theme: Theme) => ({
  link: {
    color: theme.colors.primaryHover,
    display: "block",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 30
  }
}));

export default useMainPageLinkStyles;