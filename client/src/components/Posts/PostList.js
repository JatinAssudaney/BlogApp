import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

class PostList extends Component {
  state = { lastResponse: 0 };

  // renderContent() {
  //   if (lastResponse === 0) {
  //     return "You have seen all posts";
  //   } else {
  //     console.log(this.state.lastResponse);
  //     this.props.fetchPosts();
  //   }
  // }

  componentDidMount() {
    // this.props.fetchPosts();
  }
  render() {
    return <div>POSTS</div>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
