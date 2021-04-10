import React from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

/** Materialize Imports */
import "materialize-css";

const DemandResponseService = (props) => {
  return (
    <div className="form-container add-new-tenant-form">
      <form autoComplete="off" noValidate>
        <h5 className="teal-text text-darken-4 center-align form-title">
          Add Device To Demand Response Service
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-10px",
            padding: 0,
          }}
        >
          <div
            className="input-field teal-text text-darken-4 select-gender"
            style={{ marginRight: "5%" }}
          >
            <select className="teal-text text-darken-4" id="gender">
              <option value="" disabled selected>
                Select Device
              </option>
              {props.devices &&
                props.devices.map((device) => {
                  return <option value={device.name}>{device.name}</option>;
                })}
            </select>
          </div>
          <div
            className="input-field teal-text text-darken-4 select-gender"
            style={{ marginRight: "5%" }}
          >
            <select className="teal-text text-darken-4" id="gender">
              <option value="" disabled selected>
                Select DRS
              </option>
              <option value="Demand Response Service #1">
                Demand Response Service #1
              </option>
              <option value="Demand Response Service #2">
                Demand Response Service #2
              </option>
              <option value="Demand Response Service #3">
                Demand Response Service #3
              </option>
            </select>
          </div>
        </div>
        <div className="form-group-buttons" style={{ marginTop: 10 }}>
          <div className="dashboard-tab-button">Add Device</div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    devices: state.firestore.ordered.devices,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "devices" }])
)(DemandResponseService);
