// Engine
import { paths } from "src/engine/config/paths";

//PAGES
import CategoryPage from "src/ui/pages/Main";
import CartPage from "src/ui/pages/CartPage";
import ProductPage from "src/ui/pages/ProductPage";
import Page404 from "src/ui/pages/Page404";

export const pages = [
  {
    path: paths.main,
    element: <CategoryPage />
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