import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
    <nav>
      <div className="nav-width">
        <div className="logo">
          <h1>
            <Link to={"/"}>Photosen</Link>
          </h1>
        </div>
        <ul className="menu">
          <li className="item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="item">
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li className="item">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="item">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="socials">
          <div className="socials-icon">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="socials-icon">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="socials-icon">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="socials-icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      </nav>
    </>
  )
};
export default Navbar;