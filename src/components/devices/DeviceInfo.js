import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Material UI Imports */
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

/** Chart JS Imports */
import { Line } from "react-chartjs-2";

/** Images Imports */
import noImage from "../../assets/images/noImage.png";

class DeviceInfo extends Component {
  render() {
    const { auth } = this.props;
    const device = this.props.location.state;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    if (device) {
      return (
        <div className="device-info">
          <Card className="device-info-card">
            <IconButton
              aria-label="back"
              className="teal-text text-darken-4 device-info-icon"
            >
              <i
                class="fas fa-arrow-left"
                onClick={() => this.props.history.goBack()}
              ></i>
            </IconButton>
            <CardContent>
              <div className="device-info-card-content">
                <div className="all-devices-card-info">
                  <h5 className="card-title">{device.name}</h5>
                  <p className="card-description">{device.description}</p>
                  <p className="card-tag">
                    Active:{" "}
                    <span
                      className={`${
                        device.status
                          ? "green-text text-lighten-1"
                          : "red-text text-lighten-1"
                      }`}
                    >
                      {device.status ? "Yes" : "No"}
                    </span>
                  </p>
                </div>
                {device.imageUrl ? (
                  <img
                    className="device-info-card-image"
                    src={device.imageUrl}
                    alt="Device"
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "#004d40",
                      width: "50%",
                      objectFit: "cover",
                      borderRadius: 20,
                      height: 300,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={noImage} alt="Device" />
                  </div>
                )}
              </div>
              <Grid container spacing={10} className="device-info-two-rows">
                <Grid container item xs={12}>
                  <h5 style={{ marginBottom: 30 }} className="card-title">
                    Device Consumption
                  </h5>
                  <Line
                    data={{
                      labels: [
                        "September 2020",
                        "October 2020",
                        "November 2020",
                        "December 2020",
                        "January 2021",
                        "February 2021",
                        "March 2021",
                        "April 2021",
                        "May 2021",
                        "June 2021",
                        "July 2021",
                        "August 2021",
                      ],
                      datasets: [
                        {
                          label: "Consumption in kWh",
                          data: device.consumption,
                          borderColor: "#004d40",
                          backgroundColor: "#004d40",
                          borderWidth: 10,
                          fill: "none",
                          pointBackgroundColor: "#00897b",
                          pointBorderColor: "#00897b",
                        },
                      ],
                    }}
                    height={400}
                    width={100}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      );
    }
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
)(DeviceInfo);
