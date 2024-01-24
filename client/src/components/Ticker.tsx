import { useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, usePrevPrice } from "../redux/hooks";
import type { TickerType } from "../types/types";
import { deleteTicker } from "../redux/UserSlice";

type TickerProps = {
  ticker: TickerType;
};

const Ticker = ({ ticker }: TickerProps) => {
  const dispatch = useAppDispatch();

  const deleteFromTickersList = useCallback(
    (ticker: string) => {
      dispatch(deleteTicker(ticker));
    },
    [dispatch]
  );

  const {
    ticker: tickerName,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    last_trade_time,
  } = ticker;

  const prevPrice = usePrevPrice(price);

  const changeClass = () => {
    if (prevPrice !== undefined) {
      return price > prevPrice ? "text-green-600" : "text-red-600";
    }
    return "text-green-600";
  };

  return (
    <tbody>
      <tr>
        <td>{tickerName}</td>
        <td>{exchange}</td>
        <td className={changeClass()}>{price}$</td>
        <td>{change}</td>
        <td>{change_percent}%</td>
        <td>{dividend}%</td>
        <td>
          {last_trade_time}
          <span>
            <button
              type="button"
              onClick={() => deleteFromTickersList(tickerName)}
              className="rounded-full px-4 py-1 mx-4 bg-red-500 hover:bg-red-900 text-white"
            >
              Delete
            </button>
            <Link to={`/user/${tickerName}`}>
              <button
                type="button"
                className="rounded-full px-4 py-1 mx-4 bg-green-500 hover:bg-green-900 text-white"
              >
                Details
              </button>
            </Link>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default memo(Ticker);
