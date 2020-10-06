import React, { Component } from "react";
import autosize from "autosize";

class PostContent extends Component {
  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  render() {
    const {
      input,
      meta: { touched, error, warning },
    } = this.props;
    return (
      <div>
        <label>Content</label>
        <div>
          <textarea {...input} ref={(c) => (this.textarea = c)} cols="60" />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
}

export default PostContent;
