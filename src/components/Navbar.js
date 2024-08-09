import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <li><a href="#availability">Room Availability</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#near">Near PG</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
