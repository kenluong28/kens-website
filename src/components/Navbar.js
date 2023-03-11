import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href="/" class="logo">.ken()</a>
                <ul class="navigation">
                    <li>
                        <a href='home'>.home()</a>
                    </li>
                    <li>
                        <a href='about'>.about()</a>
                    </li>
                    <li>
                        <a href='projects'>.projects()</a>
                    </li>
                    <li>
                        <a href='connect'>.connect()</a>
                    </li>
                </ul>
                </nav>
        </div>
    )
}

export default Navbar