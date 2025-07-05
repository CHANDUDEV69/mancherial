import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./Header.css"
const Header = () => {
     // navigation toggle handler
     const navigationToggler = (e) => {
          const navmenu = window.navMenu;
          navmenu.classList.toggle("active");
     }

     return <header className="header theme-section-padding">
          <Link to="/" className="logoWrapper">
               <img src={Logo} alt="Mancheryal Interior Design" width="100%" tabIndex={1} aria-labelledby="interior logo"/>
          </Link>
          <nav className="navMenu" onClick={navigationToggler} id="navMenu">
               <div className="hamburger mobile">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
               </div>
               <ul className="navLinks">
                    <li><a href="#services" tabIndex={1}>WHAT WE DO</a></li>
                    <li><a href="#whychooseus" tabIndex={1}>WHY CHOOSE US</a></li>
                    <li><a href="#projects" tabIndex={1}>PROJECTS</a></li>
                    <li><a href="#blogs" tabIndex={1}>BLOGS</a></li>
                    <li><a href="#ContactUs" className="end" tabIndex={1}>CONTACT</a></li>
               </ul>
          </nav>
     </header>
}
export default Header;