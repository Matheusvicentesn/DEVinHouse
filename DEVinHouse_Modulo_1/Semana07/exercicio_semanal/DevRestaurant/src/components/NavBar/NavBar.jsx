import React from "react";
import "./NavBar.css";
import logo from "/src/assets/logo.png";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li className="texto hover">
          <a href="#">CARDÁPIO</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
