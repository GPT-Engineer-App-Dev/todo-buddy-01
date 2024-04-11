import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Widgets from "./pages/Widgets.jsx";
import Gallery from "./pages/Gallery.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
