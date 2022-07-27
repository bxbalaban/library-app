import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll, } from 'react-scroll'

import "../components/style-navbar.css"


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='navbar'>
            <div className='navbar-settings'>
                <div className='navbar-display'>
                    <h1 className='text-logo'>Library.</h1>
                    <ul className='navbar-list-display'>
                        <li><Link to="main" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link to="form" spy={true} smooth={true} offset={-100} duration={500}>Register</Link></li>
                        <li><Link to="footer" spy={true} smooth={true} offset={50} duration={500}>Social Media</Link></li>
                    </ul>
                </div>
                <div className='navbar-button'>
                    <button className='button-sign-in'>Sign In</button>
                    <button className='button-sign-up'>Sign Up</button>
                </div>
                <div className='navbar-menu-icon-display' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5'></MenuIcon> : <XIcon className='w-5'></XIcon>}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : "navbar-menu-display"}>
                <li className="navbar-menu-display-items">Home</li>
                <li className="navbar-menu-display-items">About</li>
                <li className="navbar-menu-display-items">Support</li>
                <li className="navbar-menu-display-items">Platforms</li>

                <div className='menu-display-settigs'>
                    <button className='menu-sign-up'>Sign Up</button>
                    <button className='menu-sign-in'>Sign In</button>
                </div>
            </ul>

        </div>

    );
}

export default Navbar