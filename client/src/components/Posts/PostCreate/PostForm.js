import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import formFields from "./formFields";
import PostField from "./PostField";
import PostTextArea from "./PostContent";
import "./PostForm.css";

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
      <form className="postCreate__container">
        {this.renderFields()}
        <Field component={PostTextArea} name="body" />
      </form>
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
