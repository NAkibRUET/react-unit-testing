import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class PostList extends React.Component {
  render() {
    const { title, desc } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div data-test="PostList">
        <h3 data-test="PostTitle">{title}</h3>
        <div data-test="PostDesc">{desc}</div>
      </div>
    );
  }
}
PostList.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default PostList;
