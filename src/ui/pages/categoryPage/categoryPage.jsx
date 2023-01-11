//Core
import { useSelector } from 'react-redux';
//Components
import ProductsList from 'src/ui/components/productsList/productsList';
//Styles 
import 'src/ui/pages/categoryPage/categoryPage.css'

const CategoryPage = () => {

    const categoryName = useSelector(state => state.products.activeCategory)

    return (
        <>
            <h1 className='page-header'>{categoryName.toUpperCase()}</h1>
            <ProductsList />
        </>
    );
};

export default CategoryPage;