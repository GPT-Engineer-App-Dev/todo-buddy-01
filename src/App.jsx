import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Widgets from "./components/Widgets.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Widgets />
      <Footer />
    </Router>
  );
}

export default App;
