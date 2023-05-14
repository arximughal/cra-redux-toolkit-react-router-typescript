import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

interface RoutesArray {
  path: String;
  exact?: boolean;
  component: React.ReactElement;
}

// Define an array of route objects that specify the path and component for each route
const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
