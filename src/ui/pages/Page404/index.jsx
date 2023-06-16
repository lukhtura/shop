//Components
import MainPageLink from "ui/components/MainPageLink";

//Styles
import { useStyles } from "./styles";



function Page404() {

  /**/
  const classNames = useStyles();
  /**/

  return (
    <div className={classNames.container}>
      <p className={classNames.message}>Page doesn't exist</p>
      <MainPageLink />
    </div>
  );
}

export default Page404;