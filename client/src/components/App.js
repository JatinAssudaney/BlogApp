import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header/Header";
import "./App.css";
import Landing from "./Landing/Landing";
import PostNew from "./Posts/PostCreate/PostNew";
import PostListOfTag from "./Posts/PostDisplay/PostListOfTag";
import { fetchUser } from "../actions";
import PostShow from "./Posts/PostDisplay/PostShow";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/:topicName" exact component={PostListOfTag} />
              <Route exact path="/posts/new" component={PostNew} />
              <Route exact path="/user/:id" component={PostShow} />

              {/* 
              <Route exact path="/surveys" component={Dashboard} />
              
              <Route component={NotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
