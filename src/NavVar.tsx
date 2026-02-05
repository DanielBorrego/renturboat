import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Logo } from './Logo'; 
import './NavBar.css';
import { Compra } from './Compra'

export const NavVar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
        {/* Contenedor del Logo */}
        <div className="nav-logo">
            <Link to="/"><Logo /></Link>
        </div>

        {/* Enlaces centrales */}
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#boats">Boats</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#routes">Routes</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Sección derecha */}
        <div className="nav-right">
            <p className="lang-text">Language</p>
            <div className="dropdown-container">
            <button className="login-btn" onClick={() => setIsOpen(!isOpen)}>
                <Compra />
            </button>
            
            {isOpen && (
                <div className="dropdown-menu">
                <p className='dropdown-item'><Link to="/login" onClick={() => setIsOpen(false)}>Login / Register</Link></p>
                <p className="dropdown-item"><a href="#rents">My Rents</a></p>
                </div>
            )}
            </div>
        </div>
        </nav>
    );
};