import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartModalOpen: false,
  isCurrencySelectorOpen: false,
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
      state.isCartModalOpen = action.payload;
    },
    setIsCurrencySelectorOpen: (state, action) => {
      state.isCurrencySelectorOpen = action.payload;
    },
    setCurrencySelected: (state, action) => {
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
  setIsCurrencySelectorOpen,
  setCurrencySelected,
  setFilterContainerWidth } = actions;
export default reducer;
