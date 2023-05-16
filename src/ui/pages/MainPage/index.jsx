//Core
import { useSelector } from "react-redux";
//Components
import ProductsList from "src/ui/components/ProductsList";
//Styles 
import { useStyles } from "./styles";



function MainPage() {

  /* STATE */
  const categoryName = useSelector(state => state.products.activeCategory);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <>
      <h1 className={classes.header}>{categoryName.toUpperCase()}</h1>
      <ProductsList />
    </>
  );
}

export default MainPage;