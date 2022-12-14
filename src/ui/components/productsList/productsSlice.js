import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsLoadingStatus: 'idle',
    products: [],
    singleProduct: {},
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFetching: state => {
            state.productsLoadingStatus = 'loading';
        },
        productsFetched: (state, action) => {
            state.productsLoadingStatus = 'idle';
            state.products = action.payload;
        },
        productsFetchingError: state => {
            state.productsLoadingStatus = 'error'
        },
        singleProductFetched: (state, action) => {
            state.singleProduct = action.payload;
        }
    }
});

const { actions, reducer } = productsSlice;

export const { productsFetching, productsFetched, productsFetchingError, singleProductFetched } = actions;
export default reducer;