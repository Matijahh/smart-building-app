import React, { Component } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Material UI Imports */
import Button from "@material-ui/core/Button";

import Profile from "./Profile";
import AddNewTenant from "./AddNewTenant";
import PostList from "../posts/PostList";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewTenant: false,
    };
  }
  render() {
    const { posts, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            {/*<PostList posts={posts} />*/}
            {this.state.addNewTenant && <AddNewTenant />}
          </div>
          <div className="col s12 m4">
            <Profile uid={auth.uid} />
            <div className="dashboard-group-buttons">
              <div
                className="dashboard-tab-button"
                onClick={() => {
                  this.setState({ addNewTenant: true });
                }}
              >
                Add New Tenant
              </div>
            </div>
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
