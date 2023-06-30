import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useHeaderCategoriesDropdownContentStyles = createUseStyles((theme: Theme) => ({
  wrapper: {
    zIndex: theme.zIndex.dropdown,
    position: "fixed",
    left: 20,
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19%)",
    transition: "0.3s"
  },
}));

export default useHeaderCategoriesDropdownContentStyles;
