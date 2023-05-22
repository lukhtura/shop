import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "all",
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
});

const { actions, reducer } = categoriesSlice;

export const {
  setActiveCategory
} = actions;

export default reducer;