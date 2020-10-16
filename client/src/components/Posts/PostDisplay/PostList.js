import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderContent() {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const { posts } = this.props;
    console.log(posts);
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

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
