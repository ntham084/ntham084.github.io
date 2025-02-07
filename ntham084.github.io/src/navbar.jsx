import React from "react";
import "./navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo as a separate child div */}
        <div className="logo-container">
          <h1 className="logo">NT</h1>
        </div>

        {/* Navigation links as a separate child div */}
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

