import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

/** Material UI Imports */
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

/** Images Imports */
import leafLogo from "../../assets/images/leaf-solid.svg";

class ParkingSpots extends Component {
  render() {
    const { parking } = this.props;
    return (
      <div className="parking-container">
        <div className="parking-logo">
          <img style={{ width: 70 }} src={leafLogo} alt="logo" />
        </div>
        <div className="parking-spots-left">
          {parking &&
            parking.slice(1, 8).map((spot) => {
              return (
                <div className={`spot ${!spot.available ? "taken" : ""}`}>
                  <div className="spot-number">{spot.spot}</div>
                </div>
              );
            })}
        </div>
        <div className="parking-spots-right">
          {parking &&
            parking.slice(12, 18).map((spot) => {
              return (
                <div className={`spot ${!spot.available ? "taken" : ""}`}>
                  <div className="spot-number">{spot.spot}</div>
                </div>
              );
            })}
        </div>
        <div className="parking-spots-top">
          {parking &&
            parking.slice(8, 12).map((spot) => {
              return (
                <div className={`spot ${!spot.available ? "taken" : ""}`}>
                  <div className="spot-number">{spot.spot}</div>
                </div>
              );
            })}
        </div>
        <div className="parking-entrance">
          <ArrowUpwardIcon fontSize="large" />
          <p>Parking Entrance</p>
        </div>
        <div className="parking-spots-bottom">
          {parking &&
            parking.slice(18, 21).map((spot) => {
              return (
                <div className={`spot ${!spot.available ? "taken" : ""}`}>
                  <div className="spot-number">{spot.spot}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parking: state.firestore.ordered.parking,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "parking", orderBy: ["spot", "desc"] }])
)(ParkingSpots);
