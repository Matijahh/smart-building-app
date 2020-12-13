import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class LivingRoom extends Component {
  render() {
    const { devices } = this.props;
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            {devices &&
              devices.map((device) => {
                return (
                  <div className="col s12 m6">
                    <div className="card device-box border-radius green darken-3">
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
                            Turn on/off the heat
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
