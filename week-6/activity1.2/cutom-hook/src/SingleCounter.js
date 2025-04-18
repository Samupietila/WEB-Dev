import React from "react";
import { useCounter } from "./useCounter";
import "./SingleCounter.css";

const SingleCounter = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h2>Counter:</h2>
      <div className="counter-value">{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>zero</button>
    </div>
  );
};
export default SingleCounter;
