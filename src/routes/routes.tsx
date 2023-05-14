import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import type { RouteObject } from "react-router-dom";

// Define an array of route objects that specify the path and component for each route
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
