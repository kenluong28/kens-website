import React from "react";
import './Footer.css'

const Footer = () => {
    return (
     <div className="footer">
        <div className="container">
            <ul>
                <li className="nav-item">
                    <a href="/">.home()</a>
                </li>
                <li className="nav-item">
                    <a href="/">.about()</a>
                </li>
                <li className="nav-item">
                    <a href="/">.projects()</a>
                </li>
                <li className="nav-item">
                    <a href="/">.connect()</a>
                </li>
            </ul>
        </div>
     </div>
    )
}

export default Footer