import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container'>
        <div className='navbar'>
        <div className='navbar-logo'>Sehar Malik</div>

        {/* Large Screen Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <li className='navbar-link'>
              <a href='#hero'>Home</a>
            </li>
            <li className='navbar-link'>
              <a href='#about'>About</a>
            </li>
            <li className='navbar-link'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='navbar-link'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='navbar-link'>
              <a href='#contact'>Contact</a>
            </li>
        </ul>

        {/* Menu Icon */}
       <div className='nabbar-menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
         <AiOutlineMenu size={30} />
         }
        </div> 
        </div>

         {/* Mobile Menu dropdown */}
        {
          isMenuOpen && (
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
              <li className='navbar-link'>
                <a href="#hero" onClick={toggleMenu}>Home</a>
              </li>

              <li className='navbar-link'>
                <a href="#about" onClick={toggleMenu}>About</a>
              </li>

              <li className='navbar-link'>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
              </li>

              <li className='navbar-link'>
                <a href="#skills" onClick={toggleMenu}>skills</a>
              </li>

              <li className='navbar-link'>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
              </li>
            </ul>
          )
        }
    </div>
  );
};

export default Navbar