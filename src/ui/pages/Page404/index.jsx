//Components
import MainPageLink from "ui/components/MainPageLink";

//Styles
import { useStyles } from "./styles";



function Page404() {

  /**/
  const classes = useStyles();
  /**/

  return (
    <div className={classes.container}>
      <p className={classes.message}>Page doesn't exist</p>
      <MainPageLink />
    </div>
  );
}

export default Page404;