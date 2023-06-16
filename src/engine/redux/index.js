import { configureStore } from "@reduxjs/toolkit";

import header from "engine/redux/slices/headerSlice";
import cart from "engine/redux/slices/cartSlice";
import categories from "engine/redux/slices/categoriesSlice";

export const store = configureStore({
  reducer: { header, cart, categories },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});