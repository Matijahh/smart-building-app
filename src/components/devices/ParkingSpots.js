import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Material UI Import */
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class ParkingSpots extends Component {
  render() {
    const { parking, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="parking-container">
        <div className="parking-spots-left">
          {parking &&
            parking.slice(0, 6).map((spot) => {
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
            parking.slice(6, 12).map((spot) => {
              return (
                <div className={`spot ${!spot.available ? "taken" : ""}`}>
                  <div className="spot-number">{spot.spot}</div>
                </div>
              );
            })}
        </div>
        <div className="parking-entrance">
          <ArrowUpwardIcon fontSize="large" style={{ fill: "#ffffff" }} />
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
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "parking", orderBy: ["spot", "desc"] }])
)(ParkingSpots);
