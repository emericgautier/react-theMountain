import React from "react";

const Footer = () => {
  return (
    <footer>
      <form action="">
        <label for="name">name</label>
        <input type="text" id="name" autocomplete="off" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="message">message</label>
        <textarea id="message"></textarea>
        <div className="submit-container">
          <input type="submit" className="btn" value="send message" />
        </div>
      </form>
      <div className="infos-contact">
        <div>
          <h3>address</h3>
          <p>
            <br />
            1234 Somewhere Road #87257
            <br />
            Nashville, TN 00000-0000
          </p>
        </div>
        <div>
          <h3>phone</h3>
          <p>(000) 000-0000</p>
        </div>
        <div>
          <h3>email</h3>
          <p>info@untitled.ltd</p>
        </div>
        <div className="social">
          <h3>social</h3>
          <ul>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
