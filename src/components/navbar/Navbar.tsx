import React, { useEffect, useRef, useState } from 'react'
/* import { IoSearchSharp } from "react-icons/io5"; */
import perfil from "../../images/10.png"
import SidebarComponent from '../sidebar/Sidebar';
import "../../styles/navbar.css"
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("menu");
    const [icon, setIcon] = useState("toggler");
    const [showProfileText, setShowProfileText] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const prevScrollY = useRef(0);
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const hash = location.hash || '#about';
        const linkElements = document.querySelectorAll('.nav-links');
        linkElements.forEach(link => {
            link.classList.remove('selected');
        });
        const activeLink = document.querySelector(`.nav-links a[href="${hash}"]`);
        if (activeLink && activeLink.parentElement) {
            activeLink.parentElement.classList.add('selected');
        }

        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setShowProfileText(false);
                setShowSidebar(false); 

            } else {
                setShowProfileText(true);
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current && currentScrollY > window.innerHeight) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            prevScrollY.current = currentScrollY;
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    const navToggle = () => {
        setShowSidebar(!showSidebar);

        if (active === "menu") {
            setActive("menu active");
        } else setActive("menu");

        // Icon Toggler
        if (icon === "toggler") {
            setIcon("toggler toggle");
        } else setIcon("toggler");
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
    };


    return (
        <div>
            <div className={`navbar-big ${showNavbar ? '' : 'hidden'}`}>

                <div className="nav">
                    <a href="#home" className='img-perfil'>
                        <img src={perfil} alt="" />
                    </a>

                </div>
                {/* <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            id="srch"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                        <button type="submit">
                            <IoSearchSharp />
                        </button>
                    </form>
                </div> */}
                <ul className={active}>
                    <li className="nav-links">
                        <a href="#about" className='Linklist'>Sobre Mi</a>
                    </li>
                    <li className="nav-links">

                        <a href="#experience" className='Linklist'>mi Experiencia</a>
                    </li>
                    <li className="nav-links">

                        <a href="#briefcase" className='Linklist'>Mis Proyectos</a>
                    </li>
                    <li className="nav-links">

                        <a href="#contact" className='Linklist'>Contactame</a>
                    </li>
                    {/* <li className="nav-links">

                        <a href="#blog" className='Linklist'>Blog</a>
                    </li> */}
                </ul>
                <div className="toggle-switch-nav" onClick={toggleDarkMode}>
                    <span className="switch-btn"></span>
                </div>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            {showSidebar && <SidebarComponent />}
        </div >
    )
}
