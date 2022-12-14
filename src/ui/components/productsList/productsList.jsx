//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
//Utils
import { Link } from "react-router-dom";
import { GET_ALL_PRODUCTS } from "../../../query/products";
//Actions
import { productsFetched } from "./productsSlice";
//Components
import ProductCard from "../productCard/productCard";

//Style
import './productsList.scss'

const ProductsList = () => {

    const dispatch = useDispatch();
    const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
    const { products } = useSelector(state => state.products);

    useEffect(() => {
        if (!loading) {
            dispatch(productsFetched(data));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <h1>Error</h1>
    };

    const renderProducts = (arr) => {
        if (arr.length === 0) {
            return <h1>There is no items...</h1>
        };

        return arr.category.products.map(item =>
            <Link key={item.id}
                to={`./product/${item.id}`} >
                <ProductCard
                    inStock={item.inStock}
                    id={item.id}
                    name={item.name}
                    price={item.prices[0].amount}
                    image={item.gallery[0]}
                />
            </Link>)
    };

    const elements = renderProducts(products);

    return (
        <div className="products-list">
            {elements ? elements : <h5>there is no items...</h5>}
        </div>
    );
};

export default ProductsList;