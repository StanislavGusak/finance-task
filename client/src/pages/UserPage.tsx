import { useState } from "react";
import { Link } from "react-router-dom";
import { TickerType } from "../types/types";
import { useAppSelector, useSocketConnection } from "../redux/hooks";
import Ticker from "../components/Ticker";

const UserPage = () => {
  const [filterValue, setFilterValue] = useState("");

  const items = useAppSelector((state) => state.tickers.tickers);
  const selectedTicker = useAppSelector((state) => state.user.tickers);
  const tickersList = items.filter((ticker: TickerType) =>
    selectedTicker.some((item) => item.ticker === ticker.ticker)
  );

  useSocketConnection();

  const filteredList = tickersList.filter((ticker: TickerType) =>
    ticker.ticker.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Filter tickers..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="bg-slate-100 p-1 mb-7 border border-emerald-600"
      />
      {filteredList.length > 0 ? (
        <table id="tickers" className="m-auto">
          <thead>
            <tr className="italic">
              <th>Name</th>
              <th>Exchange</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change percent</th>
              <th>Dividend</th>
              <th>Last trade time</th>
            </tr>
          </thead>
          {filteredList &&
            filteredList.map((ticker) => (
              <Ticker key={ticker.ticker} ticker={ticker} />
            ))}
        </table>
      ) : (
        <>
          <p className="text-center text-2xl italic mb-5">
            No tickers selected! Please select a ticker.
          </p>
          <Link to="/tickers" className="rounded-full bg-emerald-800 px-5 py-2 hover:bg-emerald-400  uppercase text-white">Select</Link>
        </>
      )}
    </div>
  );
};

export default UserPage;
