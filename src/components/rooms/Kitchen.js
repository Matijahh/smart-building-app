import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Kitchen extends Component {
  render() {
    const { devices, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            {devices &&
              devices
                .filter(
                  (device) =>
                    device.room === "kitchen" && device.user === auth.uid
                )
                .map((device) => {
                  return (
                    <div className="col s12 m6">
                      <div className="card device-box border-radius green darken-3">
                        <div className="overlay-image"></div>
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
)(Kitchen);
