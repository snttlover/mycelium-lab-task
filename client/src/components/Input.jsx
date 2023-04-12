import React from "react";
import "../App.css";
import { useState } from "react";
import { useMemo } from "react";

export const Input = ({ currentToken, currentSum, tokenPrices, setInputCount, tokenList, index, inputCount }) => {
    const [token, setToken] = useState(currentToken)
    const [sum, setSum] = useState(currentSum)
  
    const changeToken = (e) => {
        if(e.target.value === "--") return
        setInputCount(prev => {
            prev[index].token = e.target.value
            return prev
        })
        setToken(e.target.value)
    } 

    const changeSum = (e) => {
        if(isNaN(Number(e.target.value))) return
        setInputCount(prev => {
            prev[index].sum = e.target.value
            return prev
        })
        setSum(e.target.value)
    }

    const removeInput = () => {
        setInputCount(prev => [...prev.filter((_, idx) => index!==idx)])
    }

    const result = useMemo(() => token ? sum * tokenPrices.get(token) : 0, [tokenPrices, sum, token])
    return (
    <div className="input-wrapper">
      <select name="tokens" value={token ? token : "--"} onChange={changeToken} defaultValue="--">
        {[{name: "--", id: "--"}, ...tokenList].map(({id, name}) => {
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
      <input name="sum" type="text" value={sum} onChange={changeSum} />
      <span className="sum">{result}$</span>
      <button onClick={removeInput}>X</button>
    </div>
  );
};
