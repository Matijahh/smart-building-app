import React, { Component } from "react";
import { connect } from "react-redux";

import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m3 offset-m1 dashboard-bg-image"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(Dashboard);
