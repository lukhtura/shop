import { configureStore } from "@reduxjs/toolkit";

import header from "engine/redux/slices/headerSlice";
import cart from "engine/redux/slices/cartSlice";
import categories from "engine/redux/slices/categoriesSlice";
import slider from "engine/redux/slices/productGallerySliderSlice";

export const store = configureStore({
  reducer: { header, cart, categories, slider },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});