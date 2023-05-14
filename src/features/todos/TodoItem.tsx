import React from "react";
import Todo from "./todosSlice";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

// Define an interface for the props of the todo item component
interface TodoItemProps {
  todo: TodoItem; // The todo object to render
  onToggle: (id: string) => void; // The handler function for the toggle button
  onDelete: (id: string) => void; // The handler function for the delete button
}

// Define a todo item component that renders a single todo
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  // Destructure the id, text and completed properties from the todo object
  const { id, text, completed } = todo;

  // Return the JSX element for the todo item component
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => onToggle(id)}>Toggle</button>
      <button onClick={() => onDelete(id)}>Delete</button>
      {completed && <span>✅</span>}
    </li>
  );
};

export default TodoItem;
