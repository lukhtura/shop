//Core
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//Components
import ProductGallerySlider from '../../components/productGallerySlider/productGallerySlider';
import ProductForm from '../../components/productForm/productForm';
//Utils
import { GET_ONE_PRODUCT_BY_ID } from './../../../query/products';
//Styles 
import './productPage.scss';

const ProductPage = () => {

    const { productId } = useParams();
    const { data, loading, error } = useQuery(GET_ONE_PRODUCT_BY_ID, {
        variables: {
            id: productId
        }
    });

    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>
    };

    const renderItem = (data) => {
        const { name, id, inStock, description, attributes, prices, gallery } = data;

        return (
            <>
                <ProductGallerySlider
                    name={name}
                    gallery={gallery} />
                <ProductForm
                    name={name}
                    id={id}
                    inStock={inStock}
                    description={description}
                    attributes={attributes}
                    prices={prices}
                    gallery={gallery} />
            </>
        );
    };

    const render = renderItem(data.product);

    return (
        <div className='product-page-container'>
            {render}
        </div>
    );
};

export default ProductPage;