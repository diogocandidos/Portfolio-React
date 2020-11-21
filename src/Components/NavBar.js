import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
        
    <div className="header">
    <nav className="navbar navbar-expand-md navbar-light">
    <a id="logo" className="navbar-brand" href="https://github.com/diogocandidos">Diogo Candido da Silva</a>
    <span class="collapse navbar-collapse" id="navbarNav"></span>

      <ul className="nav nav-tabs navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            >
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
            Contact
        </Link>
        </li>
        
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;
