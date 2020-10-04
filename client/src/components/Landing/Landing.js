import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Hero from "./Hero/Hero";
import Topics from "./Topics/Topic";
import PostList from "../Posts/PostDisplay/PostList";
import "./Landing.css";
import Add from "./plus.svg";

class Landing extends Component {
  renderButton = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <button className="post__create">
            <Link to="/posts/new" className="post__create-link">
              <img
                src={Add}
                alt="Create Article"
                className="post__create--icon"
              />
            </Link>
          </button>
        );
    }
  };
  render() {
    return (
      <div>
        <Hero />
        <Topics />
        <PostList />
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
