import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import Button from "../../components/Button";
import styles from "./styles.module.scss";

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
    <div className={styles.container}>
      <h1>Counter</h1>
      <div>
        <p>
          The current counter value is{" "}
          <span className={styles.counterValue}>{counter}</span>
        </p>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <div>
        <input value={incrementAmount} onChange={handleIncrementAmountChange} />
        <Button onClick={handleIncrementByAmount}>Increment by amount</Button>
      </div>
    </div>
  );
};

export default Counter;
