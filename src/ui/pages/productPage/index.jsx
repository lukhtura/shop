//Core
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

//Components
import ProductPageGallery from "src/ui/components/ProductPageGallery";
import ProductForm from "src/ui/components/ProductForm";
import ErrorMessage from "src/ui/components/ErrorMessage";
import Spinner from "src/ui/components/Spinner";

//Utils
import { GET_PRODUCT_BY_ID } from "src/api/products";

//Styles 
import { useStyles } from "./styles";



function ProductPage() {

  const { productId } = useParams();

  /* API */
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId
    }
  });
  /* API */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

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