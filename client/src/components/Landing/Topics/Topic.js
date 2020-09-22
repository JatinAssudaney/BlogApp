import React, { Component } from "react";
import "./Topic.css";

export default class Topic extends Component {
  list = [
    "#html",
    "#css",
    "#javascript",
    "#reactjs",
    "#redux",
    "#nodejs",
    "#mongodb",
  ];
  renderTopics() {
    return this.list.map((item) => {
      return <li className="topic__list--item">{item}</li>;
    });
  }

  render() {
    return (
      <div className="topic__container">
        <div className="topic__heading">
          Dive deeper into the{" "}
          <span className="topic__heading--main-text">Topics</span> that matters
          to you.
        </div>
        <ul className="topic__list">{this.renderTopics()}</ul>
      </div>
    );
  }
}
