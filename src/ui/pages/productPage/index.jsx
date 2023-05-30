//Core
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

//Components
import ProductPageGallery from "ui/scenes/product/ProductPageGallery";
import ProductForm from "ui/scenes/product/ProductForm";
import ErrorMessage from "ui/components/ErrorMessage";
import Spinner from "ui/components/Spinner";

//Api
import { GET_PRODUCT_BY_ID } from "api/queries/products";

//Actions
import { setActiveCategory } from "engine/redux/slices/categoriesSlice";

//Styles 
import { useStyles } from "./styles";





function ProductPage() {

  const dispatch = useDispatch();

  const { productId } = useParams();

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId
    }
  });

  const classes = useStyles();

  useEffect(() => {
    dispatch(setActiveCategory(data?.product.category))
  }, [data])

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />
  }

  const renderProduct = (data) => {
    return (
      <>
        <ProductPageGallery
          name={data.name}
          gallery={data.gallery} />
        <ProductForm
          name={data.name}
          brand={data.brand}
          id={data.id}
          inStock={data.inStock}
          description={data.description}
          attributes={data.attributes}
          prices={data.prices}
          gallery={data.gallery} />
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