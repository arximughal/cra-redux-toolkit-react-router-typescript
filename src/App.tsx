import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes/routes";

// Define the main app component that renders the header, footer and router switch
const App: React.FC = () => (
  /* Return the JSX element for the app component*/
  <BrowserRouter>
    <Header />
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
