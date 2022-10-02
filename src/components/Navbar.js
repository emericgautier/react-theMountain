import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-left">
        <li>this is massively</li>
        <li>generic page</li>
        <li>element reference</li>
      </ul>
      <ul className="nav-right">
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i class="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i class="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i class="fa-brands fa-github"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
