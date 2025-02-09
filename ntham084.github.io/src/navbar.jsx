import React from "react";
import "./navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo"><a href = "#">NT</a> </div>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button id = "lightModeButton"> Light Mode </button></li>
          </ul>
        </div>
    </header>

  );
};




export default Navbar;

