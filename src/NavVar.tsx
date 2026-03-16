import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Logo } from './Logo'; 
import './NavBar.css';
import { Compra } from './Compra'

export const NavVar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState <String|null>(null);
    useEffect(() => {
        fetch("http://localhost/Proyecto/Session.php", {
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            if (data.logged) {
                setUserName(data.name);
            }
        });
    }, []);
    const annarFleer = () => {
            const element = document.getElementById("fleet");
            if(element){
                element.scrollIntoView({behavior:'smooth'});
            }
        }
        
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
            <li onClick={annarFleer}>Boats</li>
            <li><a href="#experiences">Experiences</a></li>
            <li><Link to="/Routes">Routes</Link></li>
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
                <p className='dropdown-item'>{userName ? (
                    <Link to="/LogUser"><span>{userName}</span></Link>
                ) : (
                    <Link to="/login">Log In/Register</Link>
                )}</p>
                <p className="dropdown-item"><a href="#rents">My Rents</a></p>
                </div>
            )}
            </div>
        </div>
        </nav>
    );
};