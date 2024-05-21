import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { Link, useLocation } from 'react-router-dom';
import perfil from "../../images/10.png"

import { LuSearchCode } from "react-icons/lu";
import { HiMiniBriefcase } from "react-icons/hi2";
import { IoAccessibilityOutline } from "react-icons/io5";
import { GoCodespaces } from "react-icons/go";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaBlog } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

export default function SidebarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [modeText, setModeText] = useState("Dark mode");
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash || '#home';
        const linkElements = document.querySelectorAll('.nav-link');
        linkElements.forEach(link => {
            link.classList.remove('selected');
        });
        const activeLink = document.querySelector(`.nav-link a[href="${hash}"]`);
        if (activeLink && activeLink.parentElement) {
            activeLink.parentElement.classList.add('selected');
        }
    }, [location]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        const body = document.querySelector('body');
        if (body) {
            if (!isOpen) {
                body.classList.add('sidebar-closed');
            } else {
                body.classList.remove('sidebar-closed');
            }
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
        setModeText(isDarkMode ? "Light mode" : "Dark mode");
    };


    return (
        <div>
            <nav className={`sidebar ${isOpen ? '' : 'close'}`}>

                <header>
                    <div className="image-text">

                        <span className="image">
                            <Link to='/'>
                                <img src={perfil} alt="" />
                            </Link>
                        </span>

                        <div className="text logo-text">
                            <span className="name">Ronal Rojas Roque</span>
                            <span className="profession">Desarrollador Web</span>
                        </div>


                    </div>
                    <div className="menu-bar">
                        <div className="menu">
                            <div className="search-box">
                                <LuSearchCode className='bx bx-search icon' />
                                <input type="text" placeholder="Buscar..." className='input' />
                            </div>

                            <ul className="menu-links">

                                <li className="nav-link">
                                    <a href="#about">
                                        <IoAccessibilityOutline className='bx bx-bell icon' title="Sobre mi" />
                                        <span className="text nav-text">Sobre mi</span>
                                    </a>
                                </li>

                                <li className="nav-link">
                                    <a href="#experience">
                                        <GoCodespaces className='bx bx-pie-chart-alt icon' title="Experiencia" />
                                        <span className="text nav-text">Experiencia</span>
                                    </a>
                                </li>

                                <li className="nav-link">
                                    <a href="#briefcase">
                                        <HiMiniBriefcase className='bx bx-home-alt icon' title="Proyectos" />
                                        <span className="text nav-text">Proyectos</span>
                                    </a>
                                </li>

                                <li className="nav-link">
                                    <a href="#contact">
                                        <RiContactsBook3Fill className='bx bx-heart icon' title="Contacto" />
                                        <span className="text nav-text">Contacto</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="#blog">
                                        <FaBlog className='bx bx-wallet icon' title="Blog" />
                                        <span className="text nav-text">Blog</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li className="mode">
                                <div className="sun-moon">
                                    <BsFillMoonStarsFill className='bx bx-moon icon moon'></BsFillMoonStarsFill>
                                    <MdOutlineWbSunny className='bx bx-sun icon sun'></MdOutlineWbSunny>
                                </div>
                                <span className="mode-text text">{modeText}</span>

                                <div className="toggle-switch" onClick={toggleDarkMode}>
                                    <span className="switch"></span>
                                </div>
                            </li>

                        </div>
                    </div>
                    <IoIosArrowForward className={`bx bx-chevron-right toggle ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></IoIosArrowForward>

                </header>
            </nav>
        </div>
    )
}
