//Core
import { useState, useEffect } from "react";
import DataQuerys from "../../../services/DataQuerys";

//Styles 
import './categoryPage.css'

//Components
import ProductList from "../../components/productList/ProductList";

const CategoryPage = () => {

  const [products, setProducts] = useState([]);

  const data = new DataQuerys();

  useEffect(() => {
    uploadProducts();
  });

  const uploadProducts = () => {
    data.getProducts().then(res => onProductLoaded(res))
  };

  const onProductLoaded = (products) => {
    setProducts(products);
  };



  // cardRefs = [];

  // setCardRefs = (ref) => {
  //   this.cardRefs.push(ref);
  // };

  // setOutOfStock = (refs) => {
  //   refs.forEach(item => console.log(item))
  // }


  return (
    <>
      <h1 className="page-header">Category name</h1>
      <ProductList data={products} />
    </>
  );
};

export default CategoryPage;