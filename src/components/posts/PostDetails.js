import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const PostDetails = (props) => {
  const { post, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (post) {
    return (
      <div className="container section post-details">
        <div className="card">
          <div className="card-content">
            <i
              class="fas fa-arrow-left"
              onClick={() => props.history.push("/")}
            ></i>
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
            <p>{moment(post.createdAt.toDate()).calendar()}</p>
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
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
