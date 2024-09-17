import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img className="brand-title" src='././public/Preview.png' alt="Logo" />
                <div className="toggle-button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
               <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                </ul>


               </div>

                 <div className='nav-icons'>
                    <a  href="www.linkedin.com/in/anas-kalkhi-b994a72b4" target="_blank"><i className='fab fa-linkedin' ></i> </a>
                    <a href="https://x.com/Anas13764089068" target="_blank"><i className="fab fa-twitter"></i> </a>
                    <a href="mailto:your-anaskalkhi123@gmail.com" target="_blank"><i className="fas fa-envelope"></i> </a>
                </div>
        </nav>
    );
};

export default Navbar;
