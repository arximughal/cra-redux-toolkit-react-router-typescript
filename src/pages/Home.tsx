import React from "react";
import Counter from "../features/counter/Counter";
import TodoList from "../features/todos/TodoList";
import styles from "./styles/home.module.scss";

// Define a home page component that renders some content and features
const Home: React.FC = () => {
  // Return the JSX element for the home page component
  return (
    <div className={styles.container}>
      <div className={styles.jumbotron}>
        <h1>Welcome to React Boilerplate</h1>
        <p>
          This is a simple{" "}
          <a href="https://create-react-app.dev/" target="_blank">
            Create React App
          </a>{" "}
          boilerplate. It comes with a pre-defined structure that includes{" "}
          <a href="https://redux.js.org/" target="_blank">
            redux
          </a>
          ,{" "}
          <a
            href="https://redux.js.org/introduction/installation#redux-toolkit"
            target="_blank"
          >
            redux-toolkit
          </a>
          ,{" "}
          <a href="https://reactrouter.com/en/main" target="_blank">
            react-router-dom
          </a>
          , and support for{" "}
          <a href="https://sass-lang.com/" target="_blank">
            Sass
          </a>{" "}
          (scss modules).
        </p>
      </div>
      <Counter />
      <TodoList />
    </div>
  );
};

export default Home;
