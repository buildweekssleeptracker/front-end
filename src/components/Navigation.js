import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-4">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul className="right hide-on-med-and-down ">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
