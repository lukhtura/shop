import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface TechnicalState {
  headerHeight: string;
  isMobile: boolean
}

const initialState: TechnicalState = {
  headerHeight: "80px",
  isMobile: false
}

const technicalSlice = createSlice(
  {
    name: "technical",
    initialState,
    reducers: {
      setHeaderHeight: (state, action: PayloadAction<string>) => {
        state.headerHeight = action.payload;
      },
      setIsMobile: (state, action: PayloadAction<boolean>) => {
        state.isMobile = action.payload;
      },
    }
  }
);

const { actions, reducer } = technicalSlice;
export const {
  setHeaderHeight,
  setIsMobile
} = actions;
export default reducer;