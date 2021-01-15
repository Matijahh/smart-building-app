import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Material UI Import */
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";

/** Chart JS Imports */
import { Doughnut, Bar } from "react-chartjs-2";

/** Images Import */
import noImage from "../../assets/images/noImage.png";

class DeviceInfo extends Component {
  render() {
    const { device, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    if (device) {
      return (
        <div className="device-info">
          <Card className="device-info-card">
            <IconButton
              aria-label="back"
              className="teal-text text-darken-4"
              onClick={() => this.props.history.goBack()}
            >
              <ArrowBackIcon />
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
                        device.active
                          ? "green-text text-lighten-1"
                          : "red-text text-lighten-1"
                      }`}
                    >
                      {device.active ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="card-tag">
                    Room: <span>{device.room}</span>
                  </p>
                </div>
                {device.src ? (
                  <img
                    className="device-info-card-image"
                    src={device.src}
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
                <Grid container item xs={6} className="device-info-grid-item">
                  <h5 className="card-title">Consumption Last Week</h5>
                  <Doughnut
                    className="doughnut-chart"
                    data={{
                      labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ],
                      datasets: [
                        {
                          label: "Days",
                          data: [124, 196, 333, 512, 233, 99, 201],
                          backgroundColor: [
                            "#004d40",
                            "#00695c",
                            "#00796b",
                            "#009688",
                            "#80cbc4",
                            "#b2dfdb",
                            "#e0f2f1",
                          ],
                          borderColor: [
                            "#004d40",
                            "#00695c",
                            "#00796b",
                            "#009688",
                            "#80cbc4",
                            "#b2dfdb",
                            "#e0f2f1",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </Grid>
                <Grid container item xs={6}>
                  <h5 style={{ marginBottom: 30 }} className="card-title">
                    Consumption Last Hour
                  </h5>
                  <Bar
                    data={{
                      labels: [
                        "5 Minutes Ago",
                        "10 Minutes Ago",
                        "30 Minutes Ago",
                        "An Hour Ago",
                      ],
                      datasets: [
                        {
                          label: ["Consumption in kWh"],
                          data: [244, 326, 478, 120],
                          backgroundColor: [
                            "#004d40",
                            "#00695c",
                            "#00796b",
                            "#009688",
                          ],
                          borderColor: [
                            "#004d40",
                            "#00695c",
                            "#00796b",
                            "#009688",
                          ],
                          borderWidth: 10,
                          fill: "none",
                          lineTension: 0,
                          pointBackgroundColor: "#00897b",
                          pointBorderColor: "#00897b",
                        },
                      ],
                    }}
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
