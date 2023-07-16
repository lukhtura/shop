// Core
import { lazy } from "react";

// Pages
export const MainPage = lazy(() => import("ui/pages/MainPage"));
export const CartPage = lazy(() => import("ui/pages/CartPage"));
export const ProductPage = lazy(() => import("ui/pages/ProductPage"));
export const Page404 = lazy(() => import("ui/pages/Page404"));