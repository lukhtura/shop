//Components
import MainPageLink from "src/ui/components/MainPageLink";

//Styles
import { useStyles } from "./styles";



function Page404() {

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div className={classes.container}>
      <p className={classes.message}>Page doesn't exist</p>
      <MainPageLink />
    </div>
  );
}

export default Page404;