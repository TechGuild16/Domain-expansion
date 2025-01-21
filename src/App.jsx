import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigationbar/Navbar/Navbar.jsx";
import Footer from "./components/ServiceComponents/Footer/Footer.jsx";
import DynamicTitle from "./DynamicTitle.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blogs/Blogs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Home from "./pages/Home/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Solutions from "./pages/Solutions/Solutions.jsx";
function App() {
  // Now navbar is an reusable component u can send link according to your need
  const navLinks = [
    { path: "/Solutions", label: "SOLUTIONS", className: "solutions" },
    { path: "/Portfolio", label: "PORTFOLIO", className: "portfolio" },
    { path: "/About", label: "ABOUT", className: "about" },
    { path: "/Blogs", label: "BLOGS", className: "blogs" },
    { path: "/ContactUs", label: "CONTACT US", className: "projects" },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <DynamicTitle />
        <Navbar
          brandName="Domain Expansion"
          brandLink="/"
          navLinks={navLinks}
          customClass="my-custom-navbar"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
