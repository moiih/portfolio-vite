import './Navbar.css';
import svgLogo from '../../assets/logo-transparent-svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';


function Navbar() {

    const [isLightMode, setIsLightMode] = useState(true);

    function changeLightMode() {
        setIsLightMode( (prev) => !prev );
    }

    return (
        <>
            <nav className='navbar-main-container'>
                {/* Svg Logo */}
                <img src={svgLogo} alt="Portfolio Logo" className='svg-logo' />

                {/* Menu-Items */}
                <div className="nav-menu-items-container">
                    <ul className="menu-items-list">
                        <li className="nav-item  menu-item-1">Home</li>
                        <li className="nav-item  menu-item-2">About</li>
                        <li className="nav-item  menu-item-3">Projects</li>
                        <li className="nav-item  menu-item-4">Source Codes</li>
                    </ul>
                </div>


                {/* Light/Dark Mode  &  Contact Button */}
                <div className='nav-right'>
                    <FontAwesomeIcon icon={isLightMode ? faMoon : faCircleHalfStroke} className='mode-toggle' size="lg" onClick={changeLightMode} />

                    {/* contact Button */}
                    <div className="nav-contact-button-container">
                        <span>Contact Me</span>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar;
