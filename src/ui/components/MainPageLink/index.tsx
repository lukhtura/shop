//Core
import { Link } from "react-router-dom";

//Styles
import useMainPageLinkStyles from "ui/components/MainPageLink/styles";

const MainPageLink: React.FC = () => {

  const classNames = useMainPageLinkStyles();

  return <Link to="/" className={classNames.link}>Back to main page</Link>

}

export default MainPageLink;