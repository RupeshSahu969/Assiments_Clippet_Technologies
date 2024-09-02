import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/company-info">Company Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
