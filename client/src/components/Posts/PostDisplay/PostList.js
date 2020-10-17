import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../../actions";
import "./PostList.css";
import ReactMarkdown from "react-markdown";

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

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
