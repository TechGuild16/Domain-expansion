import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import domainexpansionlogo from "../../../Assets/domainExpansionLogo.png";
import './Navbar.css'
const Navbar = ({ brandName, brandLink }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const navLinks = [
    { path: "/Solutions", label: "SOLUTIONS", className: "solutions", dropdown: true },
    { path: "/Portfolio", label: "PORTFOLIO", className: "portfolio" },
    { path: "/About", label: "ABOUT", className: "about" },
    { path: "/Blogs", label: "BLOGS", className: "blogs" },
    { path: "/ContactUs", label: "CONTACT US", className: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-2" id="myNavbar">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to={brandLink}>
          <img
            src={domainexpansionlogo}
            alt="Domain Expansion Logo"
            className="img-fluid"
            style={{ maxHeight: "40px", width: "auto" }} // Fixed logo size
          />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li className="nav-item dropdown" key={link.path}>
                  <a
                    className={`nav-link dropdown-toggle ${isActive(link.path)}`}
                    href="#"
                    id="solutionsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.label}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="solutionsDropdown">
                    <li>
                      <Link className="dropdown-item" to="/branding">
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/web-app-development">
                        Web/App Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/digital-marketing">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/creative-designing">
                        Creative Designing
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={link.path}>
                  <Link
                    className={`nav-link ${isActive(link.path)}`}
                    to={link.path}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;