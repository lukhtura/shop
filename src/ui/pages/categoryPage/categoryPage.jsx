//Core
import { useSelector } from "react-redux";
//Components
import ProductsList from "../../components/productsList/productsList";
//Styles 
import './categoryPage.css'

const CategoryPage = () => {

    const categoryName = useSelector(state => state.products.activeCategory)

    return (
        <>
            <h1 className="page-header">{categoryName.toUpperCase()}</h1>
            <ProductsList />
        </>
    );
};

export default CategoryPage;