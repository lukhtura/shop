import { configureStore } from "@reduxjs/toolkit";

import header from "src/redux/slices/headerSlice";
import cart from "src/redux/slices/cartSlice";
import products from "src/redux/slices/productsSlice";
import slider from "src/redux/slices/productGallerySliderSlice";

export const store = configureStore({
  reducer: { header, cart, products, slider },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});