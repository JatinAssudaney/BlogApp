import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./web-programming.svg";
import SearchIcon from "./search.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="nav__container">
        <div className="logo">
          <img className="logo__icon" src={Logo} alt="webdevjourney" />
          <p className="logo__title">webdevjourney</p>
        </div>
        <div className="search">
          <input type="text" className="search__posts" />
          <img src={SearchIcon} alt="search-icon" className="search__icon" />
        </div>
        <div className="nav-links">
          <Link to="/about" className="nav-links__link">
            ABOUT
          </Link>
          <a href="#footer" className="nav-links__link contact">
            CONTACT
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
