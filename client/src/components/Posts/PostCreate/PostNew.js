import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import PostFormPreview from "./PostFormPreview";
import "./PostNew.css";

class PostNew extends Component {
  state = { showFormPreview: false };

  renderContent() {
    if (this.state.showFormPreview) {
      return (
        <PostFormPreview
          onCancel={() => this.setState({ showFormPreview: false })}
        />
      );
    }
    return (
      <PostForm onPostSubmit={() => this.setState({ showFormPreview: true })} />
    );
  }
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
