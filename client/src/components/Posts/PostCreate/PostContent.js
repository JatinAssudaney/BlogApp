import React, { Component } from "react";
import autosize from "autosize";
import "./PostContent.css";

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
      <div className="post-field">
        <label className="post-field__label">Content</label>
        <div>
          <textarea
            className="post-field__body"
            {...input}
            ref={(c) => (this.textarea = c)}
            cols="50"
          />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
}

export default PostContent;
