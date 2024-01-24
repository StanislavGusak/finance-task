import { createSelector } from 'reselect';
import { RootState } from './store';

export const selectTickers = (state: RootState) => state.user.tickers;

export const selectSelectedTicker = createSelector(
  [selectTickers, (_, props) => props.tickerName],
  (user, tickerName) => user.find((ticker) => ticker.ticker === tickerName)
);