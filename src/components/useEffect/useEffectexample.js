import { useState, useEffect } from "react";

export const Logging = () => {
   
  const [count, setCounter] = useState(0);
  useEffect(() => {
    console.log(count);
  });
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        update state
      </button>
    </>
  );
};