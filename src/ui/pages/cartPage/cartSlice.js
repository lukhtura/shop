import { createSlice } from "@reduxjs/toolkit";
//Utils
import { v4 as genId } from 'uuid';

const initialState = {
    itemsInCart: [],
    qty: 0,
    totalPrice: 0,
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.itemsInCart.push({ id: genId(), ...action.payload });
                state.qty += 1;
            },
            removeFromCart: (state, action) => {
                let index = state.itemsInCart.findIndex(item => item.id === action.payload)
                state.itemsInCart.splice(index, 1);
                state.qty -= 1;
            },
            countTotalPrice: state => {
                let amount = 0;
                state.itemsInCart.forEach(item => {
                    amount += item.prices[0].amount
                })
                state.totalPrice = amount.toFixed(2);
            },
        }
    }
)

const { actions, reducer } = cartSlice;
export default reducer;
export const { addToCart, removeFromCart, countTotalPrice } = actions;