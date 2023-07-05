import { configureStore } from "@reduxjs/toolkit";

import header from "engine/redux/slices/headerSlice";
import cart from "engine/redux/slices/cartSlice";
import technical from "engine/redux/slices/technicalSlice"

export const store = configureStore({
  reducer: { header, cart, technical },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;