import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ brandName, brandLink, navLinks, customClass }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (location.pathname === path && location.pathname !== brandLink) {
      return "active";
    }
    return "";
  };

  return (
    <div className={`container-fluid pt-3 sticky-top ${customClass}`}>
      <nav className="navbar navbar-expand-lg simple-navbar px-4">
        <a className="navbar-brand simple-brand" href={brandLink}>
          {brandName}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link navbar-link ${link.className} ${isActive(
                    link.path
                  )}`}
                  to={link.path}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <span className="getStarted">GET STARTED</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
