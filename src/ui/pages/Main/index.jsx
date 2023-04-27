//Core
import { useSelector } from "react-redux";
//Components
import ProductsList from "src/ui/components/ProductsList";
//Styles 
import "src/ui/pages/Main/styles.css"

function Main() {

  const categoryName = useSelector(state => state.products.activeCategory)

  return (
    <>
      <h1 className="page-header">{categoryName.toUpperCase()}</h1>
      <ProductsList />
    </>
  );
}

export default Main;