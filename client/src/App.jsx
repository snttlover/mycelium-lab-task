import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/Input";
import { useEffect, useState } from "react";
import socket, { getPrices } from "./api/prices";
import { getTokens } from "./api/tokens";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [inputCount, setInputCount] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [prices, setPrices] = useState([]);

  const fetchPrices = async () => {
    const tokenIds = tokens.map((i) => i.id);
    const pricesList = await getPrices(tokenIds.join(","));
    const pricesMap = new Map();
    for (const [key, value] of Object.entries(pricesList)) {
      pricesMap.set(key, value.usd);
    }
    setPrices(pricesMap);
  };

  useEffect(() => {
    const fetchTokens = async () => {
      const data = await getTokens();
      setTokens(data);
    };
    fetchTokens();
  }, []);

  useEffect(() => {
    if (tokens.length) {
      fetchPrices();
      setInterval(fetchPrices, 20000);
    }
  }, [tokens]);

  const addInput = () => {
    if (inputCount.length < 5 && !inputCount.find(i => i.token === ""))
      setInputCount((prev) => [...prev, {token: "", sum: 1}]);
  };

  return (
    <div className="App">
      <div>
        {inputCount.map((i, index) => {
          return (
          <Input
            tokenPrices={prices}
            currentToken={i.token}
            tokenList={tokens}
            currentSum={i.sum}
            index={index}
            key={Math.random()}
            setInputCount={setInputCount}
            inputCount={inputCount}
          ></Input>
        )
          })}
        <button onClick={addInput}>Add</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
