import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes/routes";
import Home from "./pages/Home";
import About from "./pages/About";

// Define the main app component that renders the header, footer and router switch
const App: React.FC = () => (
  /* Return the JSX element for the app component*/ <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
