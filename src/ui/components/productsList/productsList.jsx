//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { createSelector } from "@reduxjs/toolkit";
//Utils
import { Link } from "react-router-dom";
import { GET_ALL_PRODUCTS } from "../../../query/products";
//Actions
import { productsFetch } from "../../../redux/features/productsSlice";
//Components
import ProductCard from "../productCard/productCard";
import Spinner from "../spinner/Spinner";

//Style
import './productsList.scss'

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
    const products = useSelector(filteredCategoriesSelector)
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
        return <h1>Error</h1>
    };

    const renderProducts = (arr) => {
        if (arr.length === 0) {
            return <h1>There is no items...</h1>
        };

        return arr.map(item =>
            <Link
                className="products-list-item"
                key={item.id}
                to={`./product/${item.id}`} >
                <ProductCard
                    inStock={item.inStock}
                    id={item.id}
                    brand={item.brand}
                    name={item.name}
                    price={item.prices[0].amount}
                    image={item.gallery[0]}
                />
            </Link>
        );
    };

    return (
        <div className="products-list">
            {renderProducts(products)}
        </div>
    );
};

export default ProductsList;