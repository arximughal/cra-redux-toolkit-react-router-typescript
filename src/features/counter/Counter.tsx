import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { increment, decrement, incrementByAmount } from "./counterSlice";

// Define a counter component that uses the redux state and actions
const Counter: React.FC = () => {
  // Use useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Use useSelector hook to get the counter value from the redux state
  const counter = useSelector((state: RootState) => state.counter.value);

  // Use useState hook to manage a local state for the increment amount input
  const [incrementAmount, setIncrementAmount] = useState("2");

  // Define a handler function for the increment button
  const handleIncrement = () => {
    // Dispatch the increment action to the store
    dispatch(increment());
  };

  // Define a handler function for the decrement button
  const handleDecrement = () => {
    // Dispatch the decrement action to the store
    dispatch(decrement());
  };

  // Define a handler function for the increment by amount button
  const handleIncrementByAmount = () => {
    // Parse the increment amount input as a number
    const amount = Number(incrementAmount) || 0;

    // Dispatch the increment by amount action to the store with the amount as payload
    dispatch(incrementByAmount(amount));
  };

  // Define a handler function for the increment amount input change
  const handleIncrementAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Set the local state with the new input value
    setIncrementAmount(event.target.value);
  };

  // Return the JSX element for the counter component
  return (
    <div>
      <h1>Counter</h1>
      <p>The current counter value is {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input value={incrementAmount} onChange={handleIncrementAmountChange} />
      <button onClick={handleIncrementByAmount}>Increment by amount</button>
    </div>
  );
};

export default Counter;
