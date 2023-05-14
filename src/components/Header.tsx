import React from "react";
import { Link } from "react-router-dom";

// Define a header component that renders a navigation bar with links
const Header: React.FC = () => {
  // Return the JSX element for the header component
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
