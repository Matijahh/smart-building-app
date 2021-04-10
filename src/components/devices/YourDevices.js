import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Custom Components Imports */
import TopThreeConsumers from "./TopThreeConsumers";
import AllDevices from "./AllDevices";
import WholesomeConsumption from "./WholesomeConsumption";
import BuildingDevices from "./BuildingDevices";
import ParkingSpots from "./ParkingSpots";
import Profile from "../dashboard/Profile";
class YourDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topThreeConsumers: true,
      allDevices: false,
      wholesomeConsumption: false,
      buildingDevices: false,
      parkingSlots: false,
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { devices, auth } = this.props;
    const userDevices =
      devices &&
      devices.filter((device) => {
        return device.user === auth.uid;
      });
    const buildingDevices =
      devices &&
      devices.filter((device) => {
        return device.user === "all";
      });
    const topThree = {
      first: devices && devices[0],
      second: devices && devices[1],
      third: devices && devices[2],
    };
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
                  backgroundColor: this.state.topThreeConsumers && "#004d40",
                  color: this.state.topThreeConsumers && "white",
                }}
                onClick={() => {
                  this.setState({
                    wholesomeConsumption: false,
                    allDevices: false,
                    topThreeConsumers: true,
                    buildingDevices: false,
                    parkingSlots: false,
                  });
                }}
              >
                Top Three Household Consumers
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.allDevices && "#004d40",
                  color: this.state.allDevices && "white",
                }}
                onClick={() => {
                  this.setState({
                    wholesomeConsumption: false,
                    allDevices: true,
                    topThreeConsumers: false,
                    buildingDevices: false,
                    parkingSlots: false,
                  });
                }}
              >
                Household Devices
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.wholesomeConsumption && "#004d40",
                  color: this.state.wholesomeConsumption && "white",
                }}
                onClick={() => {
                  this.setState({
                    wholesomeConsumption: true,
                    allDevices: false,
                    topThreeConsumers: false,
                    buildingDevices: false,
                    parkingSlots: false,
                  });
                }}
              >
                Household Consumption
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.buildingDevices && "#004d40",
                  color: this.state.buildingDevices && "white",
                }}
                onClick={() => {
                  this.setState({
                    wholesomeConsumption: false,
                    allDevices: false,
                    topThreeConsumers: false,
                    buildingDevices: true,
                    parkingSlots: false,
                  });
                }}
              >
                Building Devices
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.parkingSlots && "#004d40",
                  color: this.state.parkingSlots && "white",
                }}
                onClick={() => {
                  this.setState({
                    wholesomeConsumption: false,
                    allDevices: false,
                    topThreeConsumers: false,
                    buildingDevices: false,
                    parkingSlots: true,
                  });
                }}
              >
                Parking Spots
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            {this.state.topThreeConsumers && (
              <TopThreeConsumers topThree={topThree} />
            )}
            {this.state.allDevices && <AllDevices devices={userDevices} />}
            {this.state.wholesomeConsumption && <WholesomeConsumption />}
            {this.state.buildingDevices && (
              <BuildingDevices devices={buildingDevices} />
            )}
            {this.state.parkingSlots && <ParkingSpots />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.firestore.ordered.devices,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "devices" }])
)(YourDevices);
