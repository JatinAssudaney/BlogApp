import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import "./App.css";
import Landing from "./Landing/Landing";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              {/* 
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/surveys/new" component={SurveyNew} />
              <Route component={NotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
