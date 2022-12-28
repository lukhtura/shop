import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingStatus: 'idle',
    products: [],
    categories: [],
    activeCategory: 'all',
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFetch: (state, action) => {
            state.loadingStatus = 'idle';
            state.products = action.payload;
        },
        categoriesFetch: (state, action) => {
            state.loadingStatus = 'idle';
            state.categories = action.payload;
        },
        activeCategoryChange: (state, action) => {
            state.activeCategory = action.payload;
        }
    }
});

const { actions, reducer } = productsSlice;

export const {
    productsFetch,
    categoriesFetch,
    activeCategoryChange
} = actions;

export default reducer;