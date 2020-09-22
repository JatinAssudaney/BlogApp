import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "./web-programming.svg";
import SearchIcon from "./search.svg";
import "./Header.css";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <Link key="about" to="/about" className="nav-links__link">
            ABOUT
          </Link>,
          <a key="login" href="/auth/google" className="nav-links__link login">
            Login with Google
          </a>,
        ];
      default:
        return [
          <Link key="about" to="/about" className="nav-links__link">
            ABOUT
          </Link>,
          <a key="logout" href="/api/logout" className="nav-links__link logout">
            Logout
          </a>,
        ];
    }
  };

  render() {
    return (
      <nav className="nav__container">
        <Link to="/" className="logo">
          <img className="logo__icon" src={Logo} alt="webdevjourney" />
          <p className="logo__title">webdevjourney</p>
        </Link>
        <div className="search">
          <input type="text" className="search__posts" />
          <img src={SearchIcon} alt="search-icon" className="search__icon" />
        </div>
        <div className="nav-links">{this.renderContent()}</div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
