import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TickerType } from "types/types";

type InitialStateType = {
  tickers: TickerType[];
};

const loadTickersFromLocalStorage = () => {
  const storedTickers = localStorage.getItem("selectedTickers");
  return storedTickers ? JSON.parse(storedTickers) : [];
};

const initialState: InitialStateType = {
  tickers: loadTickersFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userTicker: (state, action: PayloadAction<TickerType[]>) => {
      state.tickers = action.payload;
    },
    addTicker: (state, action: PayloadAction<TickerType>) => {
      state.tickers = [...state.tickers, action.payload];
      localStorage.setItem("selectedTickers", JSON.stringify(state.tickers));
    },
    deleteTicker: (state, action: PayloadAction<string>) => {
      state.tickers = state.tickers.filter((t) => t.ticker !== action.payload);
      localStorage.setItem("selectedTickers", JSON.stringify(state.tickers));
    },
    uploadTicker: (state, action: PayloadAction<string>) => {
      const item = state.tickers.find((t) => t.ticker === action.payload);

      if (!item) {
        state.tickers = [
          ...state.tickers,
          {
            ticker: action.payload,
            exchange: "",
            price: 0,
            change: 0,
            change_percent: 0,
            dividend: 0,
            yield: 0,
            last_trade_time: "",
          },
        ];
      }
    },
  },
});

export const { userTicker, addTicker, deleteTicker, uploadTicker } =
  userSlice.actions;

export default userSlice.reducer;
