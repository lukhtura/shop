//Core
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//Components
import ProductGallerySlider from 'src/ui/components/productGallerySlider/productGallerySlider';
import ProductForm from 'src/ui/components/productForm/productForm';
import ErrorMessage from 'src/ui/components/errorMessage/errorMessage';

//Utils
import { GET_ONE_PRODUCT_BY_ID } from 'src/api/products';

//Styles 
import 'src/ui/pages/productPage/productPage.scss';
import Spinner from 'src/ui/components/spinner/Spinner';

const ProductPage = () => {

    const { productId } = useParams();
    const { data, loading, error } = useQuery(GET_ONE_PRODUCT_BY_ID, {
        variables: {
            id: productId
        }
    });

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <ErrorMessage />
    };

    const renderItem = (data) => {

        const { name, brand, id, inStock, description, attributes, prices, gallery } = data;

        return (
            <>
                <ProductGallerySlider
                    name={name}
                    gallery={gallery} />
                <ProductForm
                    name={name}
                    brand={brand}
                    id={id}
                    inStock={inStock}
                    description={description}
                    attributes={attributes}
                    prices={prices}
                    gallery={gallery} />
            </>
        );
    }

    const render = renderItem(data.product);

    return (
        <div className='product-page-container'>
            {render}
        </div>
    );
};

export default ProductPage;