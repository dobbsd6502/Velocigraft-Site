import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/VelocigraftLogoTransparent.png';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    useEffect(() => {
        showButton();
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                        <span style={{ fontFamily: 'Trebuchet MS', fontSize: '24px' }}>VELOCIGRAFT</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-people' className='nav-links' onClick={closeMobileMenu}>
                                Our People
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/awards' className='nav-links' onClick={closeMobileMenu}>
                                Awards
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
