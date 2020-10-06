import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import PostFormPreview from "./PostFormPreview";
import "./PostNew.css";

class PostNew extends Component {
  render() {
    return (
      <div className="new-post__container">
        <PostForm />
        <PostFormPreview />
      </div>
    );
  }
}

export default reduxForm({
  form: "postForm",
})(PostNew);
