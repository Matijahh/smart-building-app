import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class DeviceInsight extends Component {
  render() {
    const { device, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="card device-box border-radius green darken-3 device-insight">
            <i
              class="fas fa-arrow-left device-back-icon"
              onClick={() => {
                this.props.history.push(`/${device.room}`);
              }}
            ></i>
            <img src={device.src} alt="Light" className="device-icon" />
            <div className="device-info">
              <span>Device Name:</span>
              <div className="device-description">{device.name}</div>
              <span>Device Description:</span>
              <div className="device-description">{device.description}</div>
              <div class="switch">
                <label>
                  {device.phrase}
                  <input type="checkbox" />
                  <span class="lever"></span>
                </label>
              </div>
              <span>Power consumption:</span>
              <div className="power-consumption">
                <div className="consumption-number">
                  {device.powerConsumption.consumption}KW/h
                </div>
                <div className="consumption-price">
                  -{device.powerConsumption.price}RSD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const devices = state.firestore.data.devices;
  const device = devices ? devices[id] : null;
  return {
    device: device,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "devices" }])
)(DeviceInsight);
