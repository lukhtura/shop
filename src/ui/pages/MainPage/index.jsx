//Core
import { useSelector } from "react-redux";
//Components
import ProductsList from "ui/scenes/product/ProductsList";
//Styles 
import { useStyles } from "./styles";



function MainPage() {

  /*  */
  const categoryName = useSelector(state => state.categories.activeCategory);
  /*  */

  /**/
  const classes = useStyles();
  /**/

  return (
    <>
      <h1 className={classes.header}>{categoryName.toUpperCase()}</h1>
      <ProductsList />
    </>
  );
}

export default MainPage;