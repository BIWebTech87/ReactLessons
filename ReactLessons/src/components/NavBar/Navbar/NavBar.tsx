import React from "react";
import './NavBar.css';
import Logo from "../Logo/Logo";
import LanguageSelector from "../LenguageSelector/LanguageSelector";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Logo />
      <div className="NavBar__links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default NavBar;