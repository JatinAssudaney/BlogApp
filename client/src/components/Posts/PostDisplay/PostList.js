import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../../actions";

class PostList extends Component {
  state = { lastResponse: 0 };

  postDetails = {
    headerImage:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    heading: "Implementing Zoom and Pan in Just 69 Lines of Javascript",
    subHeading: "Lightweight, open for extension, simple to use",
    body:
      "For a recent work project, I had to add the capacity to zoom and pan a workspace with several different elements in it. I’ve decided to share my implementation as it’s lightweight, open for extension, simple to use, and requires only vanilla JavaScript.",
    datePosted: Date.now(),
  };

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
    return posts.map((post) => {
      return (
        <Fragment key={post._id}>
          <div className="post__image">
            <img src={post.headerImage} alt="" />
          </div>
          <div className="post__heading">{post.heading}</div>
          <div className="post__subHeading">{post.subHeading}</div>
          <div className="post__body">{post.body}</div>
          <div className="post__datePosted">
            {new Date(post.datePosted).toLocaleDateString("en-US", options)}
          </div>
        </Fragment>
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
