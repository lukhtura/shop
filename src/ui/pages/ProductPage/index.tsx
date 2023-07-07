//Core
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks"

//Api
import { GET_PRODUCT_BY_ID } from "api/queries/products";

//Actions
import { setActiveCategory } from "engine/redux/slices/headerSlice";

//Types
import { Product } from "engine/types/products";

//Components
import ProductPageGallery from "ui/scenes/product/ProductPageGallery";
import ProductPageGalleryMobile from "ui/scenes/product/ProductPageGallery/Mobile";
import ProductForm from "ui/scenes/product/ProductForm";
import ErrorMessage from "ui/components/ErrorMessage";
import Spinner from "ui/components/Spinner";

//Styles 
import useProductPageStyles from "ui/pages/ProductPage/styles";


interface ProductPageParams {
  productId: string;
}

interface ProductData {
  product: Product;
}

interface ProductVars {
  id: string;
}


function ProductPage() {

  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(state => state.technical.isMobile);

  const { productId } = useParams<keyof ProductPageParams>() as ProductPageParams;

  const { data, loading, error } = useQuery<ProductData, ProductVars>(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId
    }
  });

  const classNames = useProductPageStyles();

  useEffect((): void => {
    if (data) {
      dispatch(setActiveCategory(data.product.category))
    }
  }, [data])

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />
  }

  const renderProduct = (data: Product) => {
    return (
      <>
        {
          isMobile

            ? <ProductPageGalleryMobile
              name={data.name}
              gallery={data.gallery} />

            : <ProductPageGallery
              name={data.name}
              gallery={data.gallery} />
        }
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

  const view: JSX.Element | null = data ? renderProduct(data.product) : null;

  return (
    <div className={classNames.container}>
      {view}
    </div>
  );
}

export default ProductPage;