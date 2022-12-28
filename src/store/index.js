import { configureStore } from '@reduxjs/toolkit';

import header from './../ui/components/header/headerSlice';
import cart from './../ui/pages/cartPage/cartSlice';
import products from '../ui/components/productsList/productsSlice';
import slider from '../ui/components/productGallerySlider/productGallerySliderSlice';

export const store = configureStore({
    reducer: { header, cart, products, slider },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});