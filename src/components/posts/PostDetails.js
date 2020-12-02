import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PostDetails = (props) => {
  const { post } = props;
  if (post) {
    return (
      <div className="container section post-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title center-align green-text text-darken-2">
              {post.title}
            </span>
            <p className="post-content grey-text text-darken-2">
              {post.content}
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p>
              Posted by{" "}
              <span className="post-summary-username green-text text-lighten-2">
                {post.authorFirstName} {post.authorLastName}
              </span>
            </p>
            <p>2nd September, 2am</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center-align">
        <p className="white-text loader-text">Loading posts...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
