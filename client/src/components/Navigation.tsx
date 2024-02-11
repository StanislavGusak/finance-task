import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/tickers">Tickers</NavLink>
      </li>
      <li>
        <NavLink to="/user">User page</NavLink>
      </li>
      <li>
        <NavLink to="*">Error page</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
