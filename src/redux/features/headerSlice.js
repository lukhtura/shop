import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartModalOpened: false,
    selectorOpened: false
};

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
    }
});


const { actions, reducer } = headerSlice;

export const { toggleCartModal, toggleSelector } = actions;
export default reducer;
