import React, { Component } from "react";
import HeroImage from "./undraw_web_developer_p3e5.svg";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero__container">
        <div className="hero__about">
          The collection of all the learning in people's{" "}
          <span className="hero__about--main-text">
            web development journey.
          </span>
        </div>
        <div className="hero__image">
          <img src={HeroImage} alt="web-developer" />
        </div>
      </div>
    );
  }
}
