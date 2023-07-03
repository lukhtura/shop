import { createUseStyles } from "react-jss";
import { Theme } from "theme";

const useHeaderCategoriesDropdownContentStyles = createUseStyles((theme: Theme) => ({
  overflow: {
    zIndex: theme.zIndex.dropdown,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  wrapper: {
    zIndex: theme.zIndex.dropdown,
    position: "fixed",
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19%)",
    transition: "0.3s"
  },
}));

export default useHeaderCategoriesDropdownContentStyles;
