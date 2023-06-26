import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



type CurrencySymbol = "$" | "£" | "A$" | "¥" | "₽";
type CurrencyLabel = "USD" | "GBP" | "AUD" | "JPY" | "RUB";

interface CurrencySelected {
  label: CurrencyLabel,
  symbol: CurrencySymbol
}

interface HeaderState {
  isCartModalOpen: boolean;
  isCurrencySelectorOpen: boolean;
  isCategoriesDropdownmenuOpen: boolean;
  currencySelected: {
    label: CurrencyLabel;
    symbol: CurrencySymbol;
  };
  activeCategory: string;
  filterContainerWidth: string;
  headerHeight: string;
}

const initialState: HeaderState = {
  isCartModalOpen: false,
  isCurrencySelectorOpen: false,
  isCategoriesDropdownmenuOpen: false,
  currencySelected: {
    label: "USD",
    symbol: "$"
  },
  activeCategory: "all",
  filterContainerWidth: "0px",
  headerHeight: "80px"
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
    setIsCategoriesDropdownmenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isCategoriesDropdownmenuOpen = action.payload;
    },
    setCurrencySelected: (state, action: PayloadAction<CurrencySelected>) => {
      state.currencySelected = action.payload;
      window.localStorage.setItem("CURRENCY_SELECTED", JSON.stringify(state.currencySelected));
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    setFilterContainerWidth: (state, action: PayloadAction<string>) => {
      state.filterContainerWidth = action.payload;
    },
    setHeaderHeight: (state, action: PayloadAction<string>) => {
      state.headerHeight = action.payload;
    },
  }
});

const { actions, reducer } = headerSlice;

export const {
  setIsCartModalOpen,
  setIsCurrencySelectorOpen,
  setIsCategoriesDropdownmenuOpen,
  setCurrencySelected,
  setFilterContainerWidth,
  setHeaderHeight,
  setActiveCategory } = actions;

export default reducer;
