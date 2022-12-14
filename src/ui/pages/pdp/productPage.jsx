//Core
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
//Utils
import { singleProductFetched } from '../../components/productsList/productsSlice';
import { GET_ONE_PRODUCT_BY_ID } from './../../../query/products';
import { addToCart } from '../cartPage/cartSlice';
//Styles 
import './productPage.scss';

const ProductPage = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();

    const { data, loading, error } = useQuery(GET_ONE_PRODUCT_BY_ID, {
        variables: {
            id: productId
        }
    });

    useEffect(() => {
        if (data) {
            dispatch(singleProductFetched(data.product));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>
    };

    const renderItem = (data) => {
        const { name, description, gallery, attributes, prices } = data;

        const attributesRender = (arr) => {
            return arr.map((item, i) => {
                if (item.name === 'Color') {
                    return (
                        <>
                            <p className='product-page-item-info-label'>COLOR:</p>
                            <div className='attributes-container'>
                                {item.items.map((color, i) => {
                                    if (color.value === '#FFFFFF') {
                                        return (
                                            <button key={i} style={{ backgroundColor: color.value, border: '1px solid black' }}
                                                type='button'
                                                className='color-btns-container-item color-btn'></button>
                                        )
                                    }
                                    return (
                                        <button key={i} style={{ backgroundColor: color.value }}
                                            type='button'
                                            className='color-btn'></button>
                                    )
                                })}
                            </div>
                        </>
                    )
                };

                return (
                    <div key={i}>
                        <p className='product-page-item-info-label'>{item.name}</p>
                        <div className='attributes-container'>
                            {item.items.map((size, i) => {
                                return <button key={i} className='size-btn' type='button'>{size.value}</button>
                            })}
                        </div>
                    </div>
                )
            })

        }

        return (
            <>
                <aside className='product-page-gallery'>
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
                    <div className='product-page-item-info'>
                        <h2 className='product-page-item-info-name'>{name}</h2>
                        {attributesRender(attributes)}
                        <div className='product-page-item-infoprice-container'>
                            <p className='product-page-item-info-label'>PRICE:</p>
                            <p className='product-page-item-info-price'>{prices[0].currency.symbol}{prices[0].amount}</p>
                        </div>
                        <button onClick={() => dispatch(addToCart(productId))} className='add-button'>ADD TO CART</button>
                        {description[0] === '<' || description[1] === '<'
                        ?  <div dangerouslySetInnerHTML={{ __html: description }}></div> 
                        : <p>{description}</p>}
                    </div>
                </div>
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

// {/* <>
// <aside>
// <div className='product-page-gallery'>
//     <div className='product-page-gallery-item'>item</div>
//     <div className='product-page-gallery-item'>item</div>
//     <div className='product-page-gallery-item'>item</div>
// </div>
// </aside>

// <div className='product-page-item'>
// <div className='product-page-item-img'>
//     <div
//         className='fake'
//         style={{
//             width: '610px',
//             height: '511px',
//             backgroundColor: 'green'
//         }}></div>
// </div>
// <div className='product-page-item-info'>
//     <h2 className='product-page-item-info-name'>Apollo</h2>
//     <h3 className='product-page-item-info-type'>Running Short</h3>
//     <p className='product-page-item-info-label'>SIZE:</p>
//     <div className='size-btns-container'>
//         <button className='size-btns-container-item size-btn' type='button'>XS</button>
//         <button className='size-btns-container-item size-btn size-btn-active' type='button'>S</button>
//         <button className='size-btns-container-item size-btn' type='button'>M</button>
//     </div>
//     <p className='product-page-item-info-label'>COLOR:</p>
//     <div className='color-btns-container'>
//         <button style={{ backgroundColor: '#D3D2D5' }}
//             type='button'
//             className='color-btns-container-item color-btn'></button>
//         <button style={{ backgroundColor: '#2B2B2B' }}
//             type='button'
//             className='color-btns-container-item color-btn color-btn-active'></button>
//         <button style={{ backgroundColor: '#0F6450' }}
//             type='button'
//             className='color-btns-container-item color-btn'></button>
//     </div>
//     <div className='product-page-item-infoprice-container'>
//         <p className='product-page-item-info-label'>PRICE:</p>
//         <p className='product-page-item-info-price'>$50.00</p>
//     </div>
//     <button className='add-button'>ADD TO CART</button>
// </div>
// </div>
// </> */}