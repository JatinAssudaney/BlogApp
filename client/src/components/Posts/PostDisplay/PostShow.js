import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../../actions";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "./prism.css";
import "./PostShow.css";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    Prism.highlightAll();
  }

  displayTags(tags) {
    if (tags) {
      return tags.map((tag) => {
        if (tag.length > 1) {
          return (
            <span key={tag} className="post__tag">
              {tag.trim()}
            </span>
          );
        }
      });
    }
  }

  renderContent() {
    const { post } = this.props;

    if (post) {
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
      const { heading, subHeading, headerImage, body, tags } = post;
      return (
        <div className="article__container">
          <h1 className="post__heading">{heading}</h1>
          <h4 className="post__subHeading">{subHeading}</h4>
          <img src={headerImage} alt="" className="post__headerImage" />
          <div className="post__tags">{this.displayTags(tags)}</div>
          <ReactMarkdown source={body} className="post__body" />
        </div>
      );
    }
  }
  render() {
    return <div className="post__show">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => ({
  post: state.posts[0],
});

const mapDispatchToProps = { fetchPost };

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
