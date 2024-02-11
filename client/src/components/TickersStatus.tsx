import { Link } from "react-router-dom";
import { FaArchive } from "react-icons/fa";
import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks/hooks";

const TickersStatus = () => {
  const selectedTickers = useAppSelector(
    (state: RootState) => state.user.tickers
  );

  const unique = Array.from(
    new Set(selectedTickers.map((ticker) => ticker.ticker))
  );

  const totalTickers = unique.length;

  return (
    <Link to="/user" className="cart_link">
      <FaArchive className="cart_icon" />
      {totalTickers > 0 && <span className="cart_count">{totalTickers}</span>}
    </Link>
  );
};

export default TickersStatus;
