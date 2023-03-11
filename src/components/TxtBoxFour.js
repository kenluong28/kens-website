import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import { IoNewspaperOutline } from 'react-icons/io5';
import './TxtBoxFour.css'

const TxtBoxFour = () => {
    return (
        <div className="text-box">
            <div className="connect">
                <div className="container">
                    <h4>Let's get in touch!</h4>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/ken-luong-457b251bb/">
                                <FaLinkedin />
                                <p>.LinkIn()</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kenluong28">
                                <FaGithub />
                                <p>.GitHub()</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://tryhackme.com/p/kluong">
                                <SiTryhackme />
                                <p>.TryHackMe()</p>
                            </a>
                        </li>
                    </ul>
                    <h5>// Download my resume</h5>
                    <div className="resume">
                        <ul>
                            <li>
                                <a href="/">
                                    <IoNewspaperOutline />
                                    <p>.Resume()</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TxtBoxFour
