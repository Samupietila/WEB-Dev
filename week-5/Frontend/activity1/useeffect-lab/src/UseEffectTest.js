import { useEffect, useState } from "react";
const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, [toggleOne]);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);
  useEffect(() => {
    setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} os running`);
    }, 1000);
  }, [count]);

  return (
    <div>
      {console.log("rendered or reRendered")}
      <h1>UseEffect component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(!count)}>Count</button>
    </div>
  );
};

export default UseEffectTest;
