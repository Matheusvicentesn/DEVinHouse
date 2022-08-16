import React from "react";
import './NavBar.css'
import logo from '/src/assets/logo.png'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><img src={logo} alt="" /></li>
        <li className="texto">
          <a href="#">CARDÁPIO</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
