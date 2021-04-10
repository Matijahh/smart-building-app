import React, { Component } from "react";

/** Important Library Imports  */
import { withRouter } from "react-router-dom";

/** Material UI Imports */
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

/** Images Imports */
import noImage from "../../assets/images/noImage.png";

const useStyles = makeStyles({
  root: {
    width: 345,
    borderRadius: 30,
  },
});

class AllDevices extends Component {
  render() {
    return (
      <Grid
        container
        spacing={1}
        className="top-three-consumers-container"
        style={{
          marginTop: 25,
          flexDirection: "row",
          justifyContent: "unset",
          height: "auto",
        }}
      >
        <h5 className="teal-text text-darken-4 center-align form-title">
          Household Devices
        </h5>
        {this.props.devices.map((device) => {
          return (
            <Grid container item xs={4} key={device.id}>
              <DeviceCard
                deviceTitle={device.name}
                deviceRoom={device.room}
                deviceSrc={device.src}
                onClick={() => this.props.history.push(`/device/${device.id}`)}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withRouter(AllDevices);

const DeviceCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <div className="all-devices-card-content">
            <div className="all-devices-card-info">
              <h5 className="card-title">{props.deviceTitle}</h5>
              <p>{props.deviceRoom}</p>
            </div>
            {props.deviceSrc ? (
              <img
                className="all-devices-card-image"
                src={props.deviceSrc}
                alt={props.deviceTitle}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "#004d40",
                  width: "50%",
                  objectFit: "cover",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: 40 }}
                  src={noImage}
                  alt={props.deviceTitle}
                />
              </div>
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
