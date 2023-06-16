//Core
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

//Utils
import { currencyExchanger } from "utils/currencyExchanger";

//Api
import { GET_ALL_PRODUCTS } from "api/queries/products";

//Components
import ProductCard from "ui/scenes/product/ProductCard";

//Style
import { useStyles } from "./styles";



function ProductsGrid() {

  const currencySelected = useSelector(state => state.header.currencySelected);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const categoryName = useSelector(state => state.categories.activeCategory);

  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  const classNames = useStyles();

  function sortProductsByInStock(products) {
    return [...products].sort((a, b) => a.inStock && !b.inStock ? -1 : 0);
  }

  function filterByActiveCategory(products) {
    return [...products].filter(product => (activeCategory === "all" ? product : product.category === activeCategory));
  }

  if (!loading && !error) {

    const filtredAndSortedProducts = filterByActiveCategory(sortProductsByInStock(data.category.products));

    return (
      <div className={classNames.container}>
        <p className={classNames.headerText}>{categoryName.toUpperCase()}</p>
        <div className={classNames.productsGrid}>
          {data.category.products.length === 0

            ? <h2>There is no products...</h2>

            : filtredAndSortedProducts.map(({ id, inStock, brand, name, prices, gallery }) => {
              return (
                <ProductCard
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
      </div>
    );
  }
}

export default ProductsGrid;