import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModalOpened: false,
  currencySelectorOpen: false,
  currencySelected: {
    label: "USD",
    symbol: "$"
  },
  filterContainerWidth: "0px"
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleCartModal: (state, action) => {
      state.cartModalOpened = action.payload;
    },
    toggleCurrencySelector: (state, action) => {
      state.currencySelectorOpen = action.payload;
    },
    changeCurrency: (state, action) => {
      state.currencySelected = action.payload;
      window.localStorage.setItem("CURRENCY_SELECTED", JSON.stringify(state.currencySelected));
    },
    setFilterContainerWidth: (state, action) => {
      state.filterContainerWidth = action.payload;
    }
  }
});

const { actions, reducer } = headerSlice;

export const {
  toggleCartModal,
  toggleCurrencySelector,
  changeCurrency,
  setFilterContainerWidth } = actions;
export default reducer;
