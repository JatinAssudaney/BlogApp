import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import PostFormPreview from "./PostFormPreview";

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
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "postForm",
})(PostNew);
