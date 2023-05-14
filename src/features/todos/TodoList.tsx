import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { addTodo, toggleTodo, deleteTodo } from "./todosSlice";
import TodoItem from "./TodoItem";

// Define a todo list component that uses the redux state and actions
const TodoList: React.FC = () => {
  // Use useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Use useSelector hook to get the todos array from the redux state
  const todos = useSelector((state: RootState) => state.todos);

  // Use useState hook to manage a local state for the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Define a handler function for the add button
  const handleAdd = () => {
    // Dispatch the add todo action to the store with the new todo input as payload
    dispatch(addTodo(newTodo));

    // Reset the local state to an empty string
    setNewTodo("");
  };

  // Define a handler function for the new todo input change
  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the local state with the new input value
    setNewTodo(event.target.value);
  };

  // Define a handler function for the toggle button of each todo item
  const handleToggle = (id: string) => {
    // Dispatch the toggle todo action to the store with the id as payload
    dispatch(toggleTodo(id));
  };

  // Define a handler function for the delete button of each todo item
  const handleDelete = (id: string) => {
    // Dispatch the delete todo action to the store with the id as payload
    dispatch(deleteTodo(id));
  };

  // Return the JSX element for the todo list component
  return (
    <div>
      <h1>Todo List</h1>
      <p>You have {todos.length} todos</p>
      <input value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {/* Loop through the todos array and render a TodoItem component for each todo */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
