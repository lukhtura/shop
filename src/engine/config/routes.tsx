// Engine
import { paths } from "engine/config/paths";

//Components
import { MainPage } from "engine/config/pages";
import { CartPage } from "engine/config/pages";
import { ProductPage } from "engine/config/pages";
import { Page404 } from "engine/config/pages";

interface Route {
  path: string;
  element: JSX.Element
}

export const routes: Route[] = [
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