import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./Navbar.css";
import domainexpansionlogo from '../../../Assets/domainExpansionLogo.svg'
const Navbar = ({ brandName, brandLink, customClass }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path && location.pathname !== brandLink
      ? "active"
      : "";
  };

  const navLinks = [
    { path: "/Solutions", label: "SOLUTIONS", className: "solutions" },
    { path: "/Portfolio", label: "PORTFOLIO", className: "portfolio" },
    { path: "/About", label: "ABOUT", className: "about" },
    { path: "/Blogs", label: "BLOGS", className: "blogs" },
    { path: "/ContactUs", label: "CONTACT US", className: "projects" },
  ];

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
            {navLinks.map((link) =>
              link.label === "SOLUTIONS" ? (
                <li className="nav-item dropdown" key={link.path}>
                  <a
                    className={`nav-link dropdown-toggle ${link.className}`}
                    href="#"
                    id="solutionsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.label}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
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
                    className={`nav-link navbar-link ${link.className} ${isActive(
                      link.path
                    )}`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
