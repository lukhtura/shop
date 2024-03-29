import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Currency } from "engine/types/products";

interface HeaderState {
  isCartModalOpen: boolean;
  isCurrencySelectorOpen: boolean;
  isCategoriesDropdownMenuOpen: boolean;
  currencySelected: {
    label: string;
    symbol: string;
  };
  activeCategory: string;
}

const initialState: HeaderState = {
  isCartModalOpen: false,
  isCurrencySelectorOpen: false,
  isCategoriesDropdownMenuOpen: false,
  currencySelected: {
    label: "USD",
    symbol: "$"
  },
  activeCategory: "all",
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsCartModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartModalOpen = action.payload;
    },
    setIsCurrencySelectorOpen: (state, action: PayloadAction<boolean>) => {
      state.isCurrencySelectorOpen = action.payload;
    },
    setIsCategoriesDropdownMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isCategoriesDropdownMenuOpen = action.payload;
    },
    setCurrencySelected: (state, action: PayloadAction<Currency>) => {
      state.currencySelected = action.payload;
      window.localStorage.setItem("CURRENCY_SELECTED", JSON.stringify(state.currencySelected));
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  }
});

const { actions, reducer } = headerSlice;

export const {
  setIsCartModalOpen,
  setIsCurrencySelectorOpen,
  setIsCategoriesDropdownMenuOpen,
  setCurrencySelected,

  setActiveCategory } = actions;

export default reducer;
