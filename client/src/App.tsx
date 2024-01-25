import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const TickersList = lazy(() => import("./components/TickersList"));
const NotFound = lazy(() => import("./components/NotFound"));
const TickerDetails = lazy(() => import("./components/TickerDetails"));
const UserPage = lazy(() => import("./pages/UserPage"));

function App() {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<p className="text-2xl ml-10">Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickers" element={<TickersList />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:tickerName" element={<TickerDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
