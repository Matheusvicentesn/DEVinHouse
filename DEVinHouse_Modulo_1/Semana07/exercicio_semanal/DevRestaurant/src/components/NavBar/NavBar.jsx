import React from "react";
import "./NavBar.css";
import logo from "/src/assets/logo.png";

const NavBar = () => {
  return (
    <header className="navbar">
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <div className="teste">
          <li className="texto">
            <a href="#">CARDÁPIO</a>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default NavBar;
