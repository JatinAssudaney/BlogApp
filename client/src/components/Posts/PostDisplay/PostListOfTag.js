import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsOfTag } from "../../../actions";

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
        <Link to={`/user/${post._id}`} key={post._id}>
          <div className="post__image">
            <img src={post.headerImage} alt="" />
          </div>
          <div className="post__heading">{post.heading}</div>
          <div className="post__subHeading">{post.subHeading}</div>
          <div className="post__body">{post.body}</div>
          <div className="post__datePosted">
            {new Date(post.datePosted).toLocaleDateString("en-US", options)}
          </div>
        </Link>
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
