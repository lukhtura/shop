//Core
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

//Components
import ProductPageGallery from "ui/scenes/product/ProductPageGallery";
import ProductForm from "ui/scenes/product/ProductForm";
import ErrorMessage from "ui/components/ErrorMessage";
import Spinner from "ui/components/Spinner";

//Utils
import { GET_PRODUCT_BY_ID } from "api/products";

//Styles 
import { useStyles } from "./styles";



function ProductPage() {

  const { productId } = useParams();

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId
    }
  });

  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />
  }

  const renderProduct = (data) => {

    const { name, brand, id, inStock, description, attributes, prices, gallery } = data;
    console.log(attributes)

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

  const view = renderProduct(data.product);

  return (
    <div className={classes.container}>
      {view}
    </div>
  );
}

export default ProductPage;