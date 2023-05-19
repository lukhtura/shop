//Core
import { Link } from "react-router-dom";

//Styles
import { theme } from "ui/components/App/theme";

function MainPageLink() {
  return (
    <Link style={{ color: theme.colors.primaryHover, display: "block", fontWeight: "bold", fontSize: 24, marginTop: 30 }} to="/">Back to main page</Link>
  )
}

export default MainPageLink;