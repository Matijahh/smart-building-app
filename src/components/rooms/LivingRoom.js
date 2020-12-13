import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import lightBulb from "../../assets/images/light-bulb.svg";
import ccTv from "../../assets/images/cctv.svg";
import television from "../../assets/images/television.svg";
import lockDoors from "../../assets/images/doorknob.svg";
import DeviceInsight from "./DeviceInsight";

class LivingRoom extends Component {
  render() {
    const { devices } = this.props;
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={lightBulb} alt="Light" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the lights
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                    onClick={() => {
                      return <DeviceInsight />;
                    }}
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img
                  src={television}
                  alt="Television"
                  className="device-icon"
                />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the TV
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={ccTv} alt="CcTv" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the cameras
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={lockDoors} alt="Lock" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Lock the doors
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const devices = state.firestore.data.devices;
  return {
    devices: devices,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "devices" }])
)(LivingRoom);
