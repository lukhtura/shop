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
      <p className={classes.header}>{categoryName.toUpperCase()}</p>
      <ProductsList />
    </>
  );
}

export default MainPage;