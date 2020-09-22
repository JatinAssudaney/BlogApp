import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Topics from "./Topics/Topic";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Topics />
      </div>
    );
  }
}
