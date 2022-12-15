//Core
// eslint-disable-next-line no-unused-vars
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
//Components
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

    // useEffect(() => {
    //     if (data) {
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data]);

    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>
    };

    const renderItem = (data) => {
        const { name, description, attributes, prices } = data;

        // const attributesRender = (arr) => {
        //     return arr.map((item, i) => {
        //         // if (item.name === 'Color') {
        //         //     return (
        //         //         <>
        //         //             <p className='product-page-item-form-label'>COLOR:</p>
        //         //             <div className='attributes-container'>
        //         //                 {item.items.map((color, i) => {
        //         //                     if (color.value === '#FFFFFF') {
        //         //                         return (
        //         //                             <button onClick={() => dispatch(getAttribute({ [item.name]: color.displayValue }))} key={i} style={{ backgroundColor: color.value, border: '1px solid black' }}
        //         //                                 type='button'
        //         //                                 className='color-btn'></button>
        //         //                         )
        //         //                     }
        //         //                     return (
        //         //                         <button onClick={() => dispatch(getAttribute({ [item.name]: color.displayValue }))} key={i} style={{ backgroundColor: color.value }}
        //         //                             type='button'
        //         //                             className='color-btn'></button>
        //         //                     )
        //         //                 })}
        //         //             </div>
        //         //         </>
        //         //     )
        //         // };

        //         return (
        //             <div key={i}>
        //                 <p className='product-page-item-form-label'>{item.name}</p>
        //                 <div className='attributes-container'>
        //                     {item.items.map((attribute, i) => {
        //                         if (i === 0) {
        //                             return (
        //                                 <div key={i} className="form_radio">
        //                                     <input
        //                                         type="radio"
        //                                         name={item.name}
        //                                         id={item.name + attribute.value}
        //                                         value={attribute.value} />
        //                                     <label htmlFor={item.name + attribute.value}>{attribute.value}</label>
        //                                 </div>)

        //                         }

        //                         return (
        //                             <div key={i} className="form_radio">
        //                                 <input
        //                                     type="radio"
        //                                     name={item.name}
        //                                     id={item.name + attribute.value}
        //                                     value={attribute.value} />
        //                                 <label htmlFor={item.name + attribute.value}>{attribute.value}</label>
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //             </div >
        //         );
        //     });
        // };

        return (
            <>
                {/* <aside className='product-page-gallery'>
                    {gallery.map((img, i) => {
                        return <div key={i} className='product-page-gallery-item'>
                            <img className='product-page-gallery-item-img' src={img} alt={name} />
                        </div>
                    })}
                </aside>

                <div className='product-page-item'>
                    <div className='product-page-item-img'>
                        <img src={gallery[0]} alt={name} />
                    </div>
                </div> */}
                <ProductForm
                    name={name}
                    description={description}
                    attributes={attributes}
                    prices={prices} />
            </>
        )

    }

    const render = renderItem(data.product);

    return (
        <div className='product-page-container'>
            {render}
        </div>
    )
};

export default ProductPage;