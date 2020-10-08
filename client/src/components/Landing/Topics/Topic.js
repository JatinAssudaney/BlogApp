import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Topic.css";
import { fetchTags } from "../../../actions";

class Topic extends Component {
  componentDidMount() {
    this.props.fetchTags();
  }

  renderTopics() {
    const { tags } = this.props;
    return tags.map((tag) => {
      return (
        <Link to={`/${tag._id}`} key={tag._id} className="topic__list--item">
          {tag._id}
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="topic__container">
        <div className="topic__heading">
          Dive deeper into the{" "}
          <span className="topic__heading--main-text">Topics</span> that matter
          to you.
        </div>
        <ul className="topic__list">{this.renderTopics()}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  tags: state.tags,
});

const mapDispatchToProps = { fetchTags };
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
