/* eslint-disable react-hooks/exhaustive-deps */
//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { createSelector } from "@reduxjs/toolkit";

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


  /* SORT PRODUCTS INSTOCK FIRST */
  const sortedProductsInStockGoesFisrt = [...products].sort((a, b) => a.inStock && !b.inStock ? -1 : 0);

  return (
    <div className={classes.container}>
      {products.length === 0

        ? <h2>There is no products...</h2>

        : sortedProductsInStockGoesFisrt.map(({ id, inStock, brand, name, prices, gallery, category }) => {
          return (
            <ProductCard
              category={category}
              key={id}
              inStock={inStock}
              id={id}
              brand={brand}
              name={name}
              price={currencyExchanger(prices, currencySelected)}
              image={gallery[0]}
            />
          );
        })}
    </div>
  );
}

export default ProductsList;