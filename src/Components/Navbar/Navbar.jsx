import React from "react";
import "./Navbar.css";
import './Responsive.css';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <a href="https://www.linkedin.com/in/sagar-singh-88208a1b0" target="_blank"  >Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
