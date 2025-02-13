import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CCSolution from "./components/HomeComponents/CCSolution.jsx";
import CDSolutions from "./components/HomeComponents/CDSolutions.jsx";
import CustomerService from "./components/HomeComponents/CustomerService.jsx";
import DMSolution from "./components/HomeComponents/DMSolution.jsx";
import SolCon from "./components/HomeComponents/SolCon.jsx";
import WADSolutions from "./components/HomeComponents/WADSolutions.jsx";
import Navbar from "./components/Navigationbar/Navbar/Navbar.jsx";
import Footer from "./components/ServiceComponents/Footer/Footer.jsx";
import DynamicTitle from "./DynamicTitle.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blogs/Blogs.jsx";
import Branding from "./pages/branding/Branding.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import CreativeDesign from "./pages/Creativedesigning/CreativeDesign.jsx";
import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing.jsx";
import Home from "./pages/Home/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Project from "./pages/Project/Project.jsx";
import Solutions from "./pages/Solutions/Solutions.jsx";
import WebAppDev from "./pages/WebAppDevelopment/WebAppDev.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DynamicTitle />
        <Navbar
          brandName="Domain Expansion"
          brandLink="/"
          customClass="my-custom-navbar"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/web-app-development" element={<WebAppDev />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/creative-designing" element={<CreativeDesign />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/CD" element={<CDSolutions />} />
          <Route path="/CC" element={<CCSolution />} />
          <Route path="/DM" element={<DMSolution />} />
          <Route path="/WAD" element={<WADSolutions />} />
          <Route path="/SolContent/:title" element={<SolCon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
