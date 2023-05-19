import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartModalOpen: false,
  isCurrencySelectorOpen: false,
  isCategoriesDropdownmenuOpen: false,
  currencySelected: {
    label: "USD",
    symbol: "$"
  },
  filterContainerWidth: "0px",
  headerHeight: "80px"
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsCartModalOpen: (state, action) => {
      state.isCartModalOpen = action.payload;
    },
    setIsCurrencySelectorOpen: (state, action) => {
      state.isCurrencySelectorOpen = action.payload;
    },
    setIsCategoriesDropdownmenuOpen: (state, action) => {
      state.isCategoriesDropdownmenuOpen = action.payload;
    },
    setCurrencySelected: (state, action) => {
      state.currencySelected = action.payload;
      window.localStorage.setItem("CURRENCY_SELECTED", JSON.stringify(state.currencySelected));
    },
    setFilterContainerWidth: (state, action) => {
      state.filterContainerWidth = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    }
  }
});

const { actions, reducer } = headerSlice;

export const {
  setIsCartModalOpen,
  setIsCurrencySelectorOpen,
  setIsCategoriesDropdownmenuOpen,
  setCurrencySelected,
  setFilterContainerWidth,
  setHeaderHeight } = actions;
export default reducer;
