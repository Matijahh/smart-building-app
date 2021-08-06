import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Custom Components Imports */
import Profile from "./Profile";
import AddNewTenant from "./AddNewTenant";
import PostList from "../posts/PostList";
import ScheduleEvent from "./ScheduleEvent";
import DemandResponseService from "./DemandResponseService";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewTenant: false,
      yourEvents: true,
      scheduleEvent: false,
      addDeviceToDRS: false,
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
          <div className="col s12 m4">
            <Profile uid={auth.uid} />
            <div
              className="dashboard-group-buttons"
              style={{ alignItems: "initial", marginLeft: 32 }}
            >
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.yourEvents && "#004d40",
                  color: this.state.yourEvents && "white",
                }}
                onClick={() => {
                  this.setState({
                    addNewTenant: false,
                    scheduleEvent: false,
                    yourEvents: true,
                    addDeviceToDRS: false,
                  });
                }}
              >
                Your Events
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.scheduleEvent && "#004d40",
                  color: this.state.scheduleEvent && "white",
                }}
                onClick={() => {
                  this.setState({
                    addNewTenant: false,
                    scheduleEvent: true,
                    yourEvents: false,
                    addDeviceToDRS: false,
                  });
                }}
              >
                Schedule Event
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.addNewTenant && "#004d40",
                  color: this.state.addNewTenant && "white",
                }}
                onClick={() => {
                  this.setState({
                    addNewTenant: true,
                    scheduleEvent: false,
                    yourEvents: false,
                    addDeviceToDRS: false,
                  });
                }}
              >
                Add New Tenant
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.addDeviceToDRS && "#004d40",
                  color: this.state.addDeviceToDRS && "white",
                }}
                onClick={() => {
                  this.setState({
                    addNewTenant: false,
                    scheduleEvent: false,
                    yourEvents: false,
                    addDeviceToDRS: true,
                  });
                }}
              >
                Demand Response Service
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            {this.state.yourEvents && <PostList posts={posts} />}
            {this.state.addNewTenant && <AddNewTenant />}
            {this.state.scheduleEvent && <ScheduleEvent />}
            {this.state.addDeviceToDRS && <DemandResponseService />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.events,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(Dashboard);
