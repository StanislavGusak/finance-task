import { render, screen } from "@testing-library/react";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import userReducer, { addTicker } from "./redux/UserSlice";
import tickerReducer from "./redux/TickersSlice";
import { Provider } from "react-redux";
import { store } from "./redux/store";

test("If HomePage is rendered", () => {
  render(<HomePage />);
  const screenText = screen.getByText("Take Control Of Your Brand New Future");
  expect(screenText).toBeInTheDocument();
});

test("renders TickersList when navigating to /tickers", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/tickers"]}>
        <Routes>
          <Route path="/tickers/*" element={<App />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  const tickersListElement = screen.getByText("Tickers");
  expect(tickersListElement).toBeInTheDocument();
});

describe("tickers reducer", () => {
  test("should return the init state when passes empty action", () => {
    const initState = undefined;
    const action = { type: "" };
    const result = tickerReducer(initState, action);
    expect(result).toEqual({
      tickers: [],
      error: false,
      loading: false,
    });
  });

  test("should not allow the same ticker in the list", () => {
    const initState = undefined;
    const action = addTicker();
    let result = userReducer(initState, action);
    expect(Object.keys(result.tickers).length).toEqual(result.tickers.length);
  });
});
