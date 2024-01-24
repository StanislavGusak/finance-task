import { configureStore } from "@reduxjs/toolkit";
import TickersReducer from "./TickersSlice";
import UserReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    tickers: TickersReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
