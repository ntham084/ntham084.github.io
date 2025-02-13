import React from "react";
import "./navbar.css"; 

const Navbar = () => {
    return (
      <div className = 'navbar'>
        <div className = "logo">NT</div>
        <ul className = "navmenu">
          <li><a href = "#Home">Home</a></li>
          <li><a href = "#Aboutme">About</a></li>
          <li><a href = "#Projects">Projects</a></li>
          <li><a href = "#Experience">Experience</a></li>
          <li><a href = "#Education">Education</a></li>
        </ul>
        <div>
      <a href="mailto:nthamtoro@gmail.com" class="nav-connect">Connect With Me</a>
      </div>
      </div>
    );
  };
  
  export default Navbar;