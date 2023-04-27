/* eslint-disable react-hooks/exhaustive-deps */
//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { createSelector } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

//Utils
import { currencyExchanger } from "src/utils/currencyExchanger";

//Api
import { GET_ALL_PRODUCTS } from "src/api/products";

//Actions
import { productsFetch } from "src/redux/slices/productsSlice";

//Components
import ProductCard from "src/ui/components/ProductCard";

//Style
import { useStyles } from "./styles";

function ProductsList() {

  /* STATE */
  const dispatch = useDispatch();
  const filteredCategoriesSelector = createSelector(
    (state) => state.products.activeCategory,
    (state) => state.products.products,
    (filter, products) => {
      if (filter === "all") {
        return products;
      }

      return products.filter(item => item.category === filter);
    },
  );
  const currencySelected = useSelector(state => state.header.currencySelected);
  const products = useSelector(filteredCategoriesSelector);
  /* STATE */

  /* API */
  const { data, loading } = useQuery(GET_ALL_PRODUCTS);
  /* API */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  useEffect(() => {
    if (!loading) {
      dispatch(productsFetch(data.category.products));
    }
  }, [loading]);

  return (
    <div className={classes.container}>
      {products.length === 0

        ? <h2>There is no items...</h2>

        : products.map(item => {
          return (
            <Link
              className={classes.product}
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
        })}
    </div>
  );
}

export default ProductsList;