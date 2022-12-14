/* eslint-disable no-unused-vars */
//Core
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
//Utils
import { GET_ALL_PRODUCTS } from "../../../query/products";
//Components
import ProductsList from "../../components/productsList/productsList";
//Styles 
import './categoryPage.css'

const CategoryPage = () => {

    // const [products, setProducts] = useState([]);

    // const data = new DataQueries();

    // useEffect(() => {
    //     uploadProducts();
    // });

    // const uploadProducts = () => {
    //     data.getProducts()
    //         .then(res => onProductLoaded(res))
    // };

    // const onProductLoaded = (products) => {
    //     setProducts(products);
    // };

    return (
        <>
            <h1 className="page-header">Category name</h1>
            <ProductsList />
        </>
    );
};

export default CategoryPage;