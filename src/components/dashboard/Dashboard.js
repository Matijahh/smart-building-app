import React, { Component } from "react";

import PostList from "../posts/PostList";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList />
          </div>
          <div className="col s12 m5 offset-m1 dashboard-bg-image"></div>
        </div>
      </div>
    );
  }
}
