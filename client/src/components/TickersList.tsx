import { useCallback } from "react";
import { TickerType } from "types/types";
import {
  useAppDispatch,
  useAppSelector,
  useSocketConnection,
} from "../redux/hooks";
import { addTicker } from "../redux/UserSlice";
import { tickersInfo } from "../data/tickersInfo";

const TickersList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.tickers);

  useSocketConnection();

  const addTickerToList = useCallback(
    (ticker: TickerType) => {
      dispatch(addTicker(ticker));
    },
    [dispatch]
  );

  return (
    <div className="px-5">
      <h2 className="text-center text-2xl font-bold italic">Tickers</h2>
      <ul>
        {items.tickers.length > 0 ? (
          items.tickers.map((ticker) => {
            const { description, imgUrl } = tickersInfo(ticker.ticker);
            return (
              <li key={ticker.ticker} {...ticker} className="mt-5">
                <div className="flex space-x-5 self-center items-center bg-slate-100 px-2 py-2">
                  <img src={imgUrl} alt={ticker.ticker} className="w-16" />
                  <div>
                    <p className="italic">{description}</p>
                    <div className="flex items-center space-x-10">
                      <strong className="w-16">{ticker.price}$</strong>
                      <button
                        onClick={() => addTickerToList(ticker)}
                        type="button"
                        className="rounded-full px-4 py-1 bg-green-500 hover:bg-red-500"
                      >
                        Add ticker
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p>Sorry, you don't have a connection to server.</p>
        )}
      </ul>
    </div>
  );
};

export default TickersList;
