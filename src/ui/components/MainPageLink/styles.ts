import { createUseStyles } from "react-jss";

const useMainPageLinkStyles = createUseStyles(theme => ({
  link: {
    color: theme.colors.primaryHover,
    display: "block",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 30
  }
}));

export default useMainPageLinkStyles;