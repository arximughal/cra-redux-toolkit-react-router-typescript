import React from "react";
import Counter from "../features/counter/Counter";
import TodoList from "../features/todos/TodoList";

// Define a home page component that renders some content and features
const Home: React.FC = () => {
  // Return the JSX element for the home page component
  return (
    <div>
      <h1>Welcome to React Boilerplate</h1>
      <p>
        This is a simple app to demonstrate how to use CRA, react router and
        redux toolkit.
      </p>
      <Counter />
      <TodoList />
    </div>
  );
};

export default Home;
