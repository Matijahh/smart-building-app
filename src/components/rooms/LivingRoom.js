import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class LivingRoom extends Component {
  render() {
    const { devices, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <i
            class="fas fa-arrow-left room-back-icon"
            onClick={() => {
              this.props.history.push(`/rooms`);
            }}
          ></i>
          <div className="row center-alignment">
            <div className="col s12 m6">
              <div className="switch">
                <label className="green-text text-darken-3">
                  <input type="checkbox" />
                  <span class="lever"></span>
                  Turn on/off the lights
                </label>
              </div>
            </div>
            <div className="col s12 m6">
              <div class="switch">
                <label className="green-text text-darken-3">
                  <input type="checkbox" />
                  <span class="lever"></span>
                  Lock/Unlock the doors
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            {devices &&
              devices
                .filter(
                  (device) =>
                    device.room === "livingroom" && device.user === auth.uid
                )
                .map((device) => {
                  return (
                    <div className="col s12 m6">
                      <div
                        className={`card device-box border-radius green darken-3`}
                      >
                        <img
                          src={device.src}
                          alt="Device"
                          className="device-icon"
                        />
                        <div className="device-info">
                          <div class="switch">
                            <label>
                              <input type="checkbox" />
                              <span class="lever"></span>
                              {device.phrase}
                            </label>
                          </div>
                          <button
                            type="text"
                            className="waves-effect waves-light btn green darken-1 white-text"
                            onClick={() => {
                              this.props.history.push(`/device/${device.id}`);
                            }}
                          >
                            See the insights
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
)(LivingRoom);
