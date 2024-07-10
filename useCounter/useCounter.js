import { useState } from "react";

export const useCounter = (
  initialValue = 10,
  incrementalAndDecremental = 1
) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + incrementalAndDecremental);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - incrementalAndDecremental);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
};
