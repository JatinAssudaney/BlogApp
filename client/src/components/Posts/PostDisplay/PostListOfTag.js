import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsOfTag } from "../../../actions";
import ReactMarkdown from "react-markdown";

class PostListOfTag extends Component {
  componentDidMount() {
    const { topicName } = this.props.match.params;
    this.props.fetchPostsOfTag(topicName);
  }

  renderContent() {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const { posts } = this.props;
    return posts.map((post) => {
      return (
        <div className="post" key={post._id}>
          <Link to={`/user/${post._id}`}>
            <div className="post__datePosted">
              {new Date(post.datePosted).toLocaleDateString("en-US", options)}
            </div>
            <img src={post.headerImage} alt="" className="post__headerImage" />
            <div className="post__content">
              <h3 className="post__heading">{post.heading}</h3>
              <h5 className="post__subHeading">{post.subHeading}</h5>
              <hr />
              <ReactMarkdown
                className="post__body"
                source={post.body.substring(0, 100)}
              />{" "}
              ...
            </div>
          </Link>
        </div>
      );
    });
  }
  render() {
    return <div className="post__container">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = { fetchPostsOfTag };

export default connect(mapStateToProps, mapDispatchToProps)(PostListOfTag);
