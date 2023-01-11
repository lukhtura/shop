//Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { createSelector } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

//Utils
import { currencyExchanger } from 'src/utils/currencyExchanger';

//Queries
import { GET_ALL_PRODUCTS } from 'src/api/products';

//Actions
import { productsFetch } from 'src/redux/features/productsSlice';

//Components
import ProductCard from 'src/ui/components/productCard/productCard';
import Spinner from 'src/ui/components/spinner/Spinner';
import ErrorMessage from 'src/ui/components/errorMessage/errorMessage';

//Style
import 'src/ui/components/productsList/productsList.scss';

const ProductsList = () => {

    const dispatch = useDispatch();
    const filteredCategoriesSelector = createSelector(
        (state) => state.products.activeCategory,
        (state) => state.products.products,
        (filter, products) => {
            if (filter === 'all') {
                return products;
            };

            return products.filter(item => item.category === filter);
        },
    );
    const currencySelected = useSelector(state => state.header.currencySelected);
    const products = useSelector(filteredCategoriesSelector);
    const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

    useEffect(() => {
        if (!loading) {
            dispatch(productsFetch(data.category.products));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);


    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <ErrorMessage />
    };

    const renderProducts = (arr) => {
        if (arr.length === 0) {
            return <h2>There is no items...</h2>
        };

        return arr.map(item => {
            return (
                <Link
                    className='products-list-item'
                    key={item.id}
                    to={`./product/${item.id}`} >
                    <ProductCard
                        inStock={item.inStock}
                        id={item.id}
                        brand={item.brand}
                        name={item.name}
                        price={currencyExchanger(item.prices, currencySelected)}
                        image={item.gallery[0]}
                    />
                </Link>
            );
        });
    };

    return (
        <div className='products-list'>
            {renderProducts(products)}
        </div>
    );
};

export default ProductsList;