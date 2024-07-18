// src/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li className="Navbar-item"><a href="#home">Home</a></li>
        <li className="Navbar-item"><a href="#about">About</a></li>
        <li className="Navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
