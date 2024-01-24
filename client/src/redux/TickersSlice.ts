import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TickerType } from "../types/types";

type InitialStateProps = {
  loading: boolean;
  error: boolean;
  tickers: TickerType[];
};

const initialState: InitialStateProps = {
  loading: false,
  error: false,
  tickers: [],
};

const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setAvailableTicker: (state, action: PayloadAction<TickerType[]>) => {
      state.tickers = action.payload;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export default tickersSlice.reducer;
export const { setAvailableTicker, setLoaded, setError } = tickersSlice.actions;
