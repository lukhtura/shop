//Core
import { useAppSelector } from "engine/redux/hooks";
import { useQuery } from "@apollo/client";

//Utils
import { currencyExchanger } from "utils/currencyExchanger";

//Api
import { GET_ALL_PRODUCTS } from "api/queries/products";

//Types
import { Product } from "engine/types/products";

//Components
import ProductCard from "ui/scenes/product/ProductCard";
import Spinner from "ui/components/Spinner";

//Style
import useProductsGridStyles from "ui/scenes/product/ProductsGrid/styles";


interface ProductsData {
  category: {
    products: Product[]
  }
}


const ProductsGrid: React.FC = () => {

  const { currencySelected, activeCategory } = useAppSelector(state => state.header);

  const { data: { category: { products } } = { category: { products: [] } }, loading, error } = useQuery<ProductsData>(GET_ALL_PRODUCTS);

  const classNames = useProductsGridStyles();

  function sortProductsByInStock(products: Product[]): Product[] {
    return [...products].sort((a, b) => a.inStock && !b.inStock ? -1 : 0);
  }

  function filterByActiveCategory(products: Product[]): Product[] {
    return [...products].filter(product => (activeCategory === "all" ? product : product.category === activeCategory));
  }

  if (!loading && !error && products) {

    const filtredAndSortedProducts: Product[] = filterByActiveCategory(sortProductsByInStock(products));

    return (
      <>
        <p className={classNames.headerText}>{activeCategory.toUpperCase()}</p>
        <div className={classNames.productsGrid}>
          {products.length === 0

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
      </>
    );
  } else {

    return <Spinner />

  }
}

export default ProductsGrid;