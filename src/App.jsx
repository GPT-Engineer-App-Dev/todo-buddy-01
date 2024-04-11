import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Widgets from "./pages/Widgets.jsx";
import Gallery from "./pages/Gallery.jsx";
import Pricing from "./pages/Pricing.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Index />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/widgets"
          element={
            <PrivateRoute>
              <Widgets />
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            <PrivateRoute>
              <Pricing />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
