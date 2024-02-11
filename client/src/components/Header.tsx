import Navigation from "./Navigation";
import TickersStatus from "./TickersStatus";

const Header = () => {
  return (
    <header className="top-header">
      <Navigation />
      <TickersStatus />
    </header>
  );
};

export default Header;
