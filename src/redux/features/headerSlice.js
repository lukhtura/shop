import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartModalOpened: false,
    selectorOpened: false,
    currencySelected: {
        label: 'USD',
        symbol: '$'
    }
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleCartModal: (state, action) => {
            state.cartModalOpened = action.payload;
        },
        toggleSelector: (state, action) => {
            state.selectorOpened = action.payload;
        },
        changeCurrency: (state, action) => {
            state.currencySelected = action.payload;
            window.localStorage.setItem('CURRENCY_SELECTED', JSON.stringify(state.currencySelected));
        }
    }
});

const { actions, reducer } = headerSlice;

export const { toggleCartModal, toggleSelector, changeCurrency } = actions;
export default reducer;
