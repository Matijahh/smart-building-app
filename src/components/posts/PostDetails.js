import React from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const PostDetails = (props) => {
  const { post, auth, user } = props;
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
            <span className="card-title center-align teal-text text-darken-4">
              {post.title}
            </span>
            <p className="post-content grey-text text-darken-2">
              {post.description}
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p>
              Posted by{" "}
              <span className="post-summary-username teal-text text-darken-4">
                {user.name} {user.surname}
              </span>
            </p>
            <div style={{ display: "flex", margin: 0, padding: 0 }}>
              <p>Start Date: {moment(post.from.toDate()).calendar()}</p>
              <p style={{ marginLeft: 50 }}>
                End Date: {moment(post.to.toDate()).calendar()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center-align">
        <p className="teal-text text-darken-4 loader-text">Loading posts...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.events;
  const post = posts ? posts[id] : null;
  const users = state.firestore.data.tenants;
  const user = users && post ? users[post.tenant] : null;
  return {
    post: post,
    user: user,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(PostDetails);
