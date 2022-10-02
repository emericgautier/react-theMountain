import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>
          La montagne <br /> ça vous gagne
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>
          <a href="#main">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
