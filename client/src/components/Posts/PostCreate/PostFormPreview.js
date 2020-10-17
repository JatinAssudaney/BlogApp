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
  const displayTags = (tags) => {
    if (tags) {
      return tags.split(",").map((tag) => {
        if (tag.length > 1) {
          return (
            <span key={tag} className="post__tag">
              {tag.trim()}
            </span>
          );
        }
      });
    }
  };

  const renderButton = ({ heading, subHeading, headerImage, body, tags }) => {
    if (heading && subHeading && headerImage && body && tags) {
      return (
        <button
          className="submit"
          onClick={() => submitPost(formValues, history)}
        >
          Post Blog to
          <img src={Logo} alt="Post to our Blog" className="submit__icon" />
        </button>
      );
    }
  };

  const renderContent = () => {
    if (formValues) {
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
      const { heading, subHeading, headerImage, body, tags } = formValues;
      return (
        <div className="article__container">
          {renderButton(formValues)}
          <h1 className="post__heading">{heading}</h1>
          <h4 className="post__subHeading">{subHeading}</h4>
          <img src={headerImage} alt="" className="post__headerImage" />
          <div className="post__tags">{displayTags(tags)}</div>
          <ReactMarkdown source={body} className="post__body" />
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
