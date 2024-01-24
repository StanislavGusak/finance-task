import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectSelectedTicker } from "../redux/selectors";

const TickerDetails = () => {
  const navigate = useNavigate();
  const { tickerName } = useParams<{ tickerName: string }>();
  const selectedTicker = useSelector((state) =>
    selectSelectedTicker(state, { tickerName })
  );

  if (!selectedTicker) {
    return (
      <p className="text-center text-2xl italic mt-20">
        No information available for the selected ticker.
      </p>
    );
  }

  return (
    <div className="px-10 py-8 bg-slate-100 w-max m-auto text-start rounded-xl italic drop-shadow-xl">
      <h2 className="text-2xl mb-4 text-orange-300">
        Detail info about {selectedTicker.ticker}
      </h2>
      <div key={selectedTicker.ticker}>
        <p>Ticker name: {selectedTicker.ticker}</p>
        <p>Exchange: {selectedTicker.exchange}</p>
        <p>Price: {selectedTicker.price}$</p>
        <p>Change: {selectedTicker.change}</p>
        <p>Change percent: {selectedTicker.change_percent}%</p>
        <p>Dividend: {selectedTicker.dividend}%</p>
        <p>Yield: {selectedTicker.yield}</p>
        <p>Last trade time: {selectedTicker.last_trade_time}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 mt-5 bg-sky-500 rounded-full hover:bg-sky-800 hover:text-white"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default TickerDetails;
