import { useState } from "react";
export const UpdateCounter = () => {
  debugger;
  const [counter, setCounter] = useState(20);
  setCounter(counter + 1);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={setCounter}>Change</button>
    </>
  );
};
