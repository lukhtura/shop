/* eslint-disable no-unused-vars */
//Core
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

//Components
import ProductPageGallery from "src/ui/components/ProductPageGallery";
import ProductForm from "src/ui/components/ProductForm";
import ErrorMessage from "src/ui/components/ErrorMessage";

//Utils
import { GET_ONE_PRODUCT_BY_ID } from "src/api/products";

//Styles 
import "src/ui/pages/productPage/productPage.scss";
import Spinner from "src/ui/components/Spinner";

function ProductPage() {

  const { productId } = useParams();
  const { data, loading, error } = useQuery(GET_ONE_PRODUCT_BY_ID, {
    variables: {
      id: productId
    }
  });

  // if (loading) {
  //   return <Spinner />;
  // } else if (error) {
  //   return <ErrorMessage />
  // }

  const renderProduct = (data) => {

    const { name, brand, id, inStock, description, attributes, prices, gallery } = data;

    return (
      <>
        <ProductPageGallery
          name={name}
          gallery={gallery} />
        <ProductForm
          name={name}
          brand={brand}
          id={id}
          inStock={inStock}
          description={description}
          attributes={attributes}
          prices={prices}
          gallery={gallery} />
      </>
    );
  }

  const render = renderProduct(data.product);

  return (
    <div className="product-page-container">
      {render}
    </div>
  );
}

export default ProductPage;