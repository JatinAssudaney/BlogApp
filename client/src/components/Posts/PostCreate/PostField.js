import React from "react";
import "./PostField.css";

const PostField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div className="post-field">
      <label className="post-field__label">{label}</label>
      <input {...input} type={type} className="post-field__input" />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default PostField;
