import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import PostField from "./PostField";
import PostTextArea from "./PostContent";

class PostForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={PostField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
          {this.renderFields()}
          <Field component={PostTextArea} name="body" />
          <Link to="/" className="">
            Cancel
          </Link>
          <button type="submit" className="">
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      const text = name.toUpperCase();
      errors[name] = `You must provide a ${text}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "postForm",
  destroyOnUnmount: false,
})(PostForm);
