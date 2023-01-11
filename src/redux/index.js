import { configureStore } from '@reduxjs/toolkit';

import header from './features/headerSlice';
import cart from './features/cartSlice';
import products from './features/productsSlice';
import slider from './features/productGallerySliderSlice';

export const store = configureStore({
    reducer: { header, cart, products, slider },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});