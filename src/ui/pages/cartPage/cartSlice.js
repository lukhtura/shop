import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    qty: 0
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.itemsInCart.push(action.payload);
                state.qty += 1;
            }
        }
    }
)

const {actions, reducer} = cartSlice;

export default reducer;
export const { addToCart } = actions;