import React from "react";

// Define an interface for the props of the button component
interface ButtonProps {
  text: string; // The text to display on the button
  onClick: () => void; // The handler function for the click event
  disabled?: boolean; // An optional prop to disable the button
}

// Define a custom button component that renders a button element
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  // Return the JSX element for the button component
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
