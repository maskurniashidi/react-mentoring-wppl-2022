import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Landing Page</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
