import React from "react";
import styles from "./Button.module.scss";

// Define an interface for the props of the button component
interface ButtonProps {
  onClick: () => void; // The handler function for the click event
  disabled?: boolean; // An optional prop to disable the button
  children: React.ReactNode;
}

// Define a custom button component that renders a button element
const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  // Return the JSX element for the button component
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
