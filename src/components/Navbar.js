import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' class="logo">.ken()</a>
                <ul class="navigation">
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>.home()</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>.about()</Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>.projects()</Link>
                    </li>
                    <li>
                        <Link to="connect" spy={true} smooth={true} offset={0} duration={500}>.connect()</Link>
                    </li>
                </ul>
                </nav>
        </div>
    )
}

export default Navbar
