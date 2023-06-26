//Core
import { lazy } from "react";

// Engine
import { paths } from "engine/config/paths";

//Pages
const MainPage = lazy(() => import("ui/pages/MainPage"));
const CartPage = lazy(() => import("ui/pages/CartPage"));
const ProductPage = lazy(() => import("ui/pages/ProductPage"));
const Page404 = lazy(() => import("ui/pages/Page404"));

interface Route {
  path: string;
  element: JSX.Element
}

export const routes = [
  {
    path: paths.main,
    element: <MainPage />
  },
  {
    path: paths.cart,
    element: <CartPage />
  },
  {
    path: paths.product,
    element: <ProductPage />
  },
  {
    path: paths.page404,
    element: <Page404 />
  }
];