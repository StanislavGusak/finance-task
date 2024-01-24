import Exchange from "../images/exchange.jpeg";

const HomePage = () => {
  return (
    <div className="flex justify-between p-5 bg-blue-950">
      <aside className="mr-5">
        <div className="text-cyan-300 p-10">
          <h2 className="text-center text-2xl mb-4">
            Take Control Of Your Brand New Future
          </h2>
          <p>
            This site provides information on world stock markets. Here you can
            view data by countries and continents or find a specific stock
            index.
          </p>
        </div>
      </aside>
      <img src={Exchange} alt="exchange" className="m-auto w-1/2" />
    </div>
  );
};

export default HomePage;
