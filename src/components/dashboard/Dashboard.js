import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    const { posts, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m4">
            <Profile uid={auth.uid} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
