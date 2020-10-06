import React from "react";
import { connect } from "react-redux";
import { submitPost } from "../../../actions";
import { withRouter } from "react-router-dom";
import Logo from "../../Header/web-programming.svg";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "./prism.css";
import "./PostFormPreview.css";

const PostFormReview = ({ formValues, submitPost, history }) => {
  const renderContent = () => {
    if (formValues) {
      Prism.highlightAll();
      const { heading, subHeading, headerImage, body, tags } = formValues;
      return (
        <div className="article__container">
          <h1 className="post__heading">{heading}</h1>
          <h2 className="post__subHeading">{subHeading}</h2>
          <img src={headerImage} alt="" className="post__headerImage" />
          <p className="post__tags">{tags}</p>
          <ReactMarkdown source={body} className="post__body" />
          <button
            className="submit"
            onClick={() => submitPost(formValues, history)}
          >
            Post Blog to
            <img src={Logo} alt="Post to our Blog" className="submit__icon" />
          </button>
        </div>
      );
    }
  };

  return <div className="postPreview__container">{renderContent()}</div>;
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.postForm.values,
  };
};

const mapDispatchToProps = { submitPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostFormReview));
