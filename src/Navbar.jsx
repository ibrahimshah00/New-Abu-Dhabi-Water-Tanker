

import React, { useState } from 'react';

import logo from './images/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleDrawer}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#counter">Counter</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#number">+971 524411758</a></li>
        <li><a href="#email">ibrahimyt445@gmail.com </a></li>

      </ul>

      <div className="othernav">
        <a href="#number" className="othernav"></a>
        <a href="#email" className="othernav"></a>
      </div>
    </nav>
  );
}

export default Navbar;
