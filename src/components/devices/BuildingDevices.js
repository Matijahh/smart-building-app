import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

/** Material UI Import */
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

class BuildingDevices extends Component {
  render() {
    const { buildings } = this.props;
    const building = buildings && buildings[0];
    const devices = building ? building.devices : null;
    return (
      <Grid
        container
        spacing={1}
        className="top-three-consumers-container"
        style={{
          marginTop: 25,
          flexDirection: "row",
          height: "auto",
          justifyContent: "unset",
        }}
      >
        <h5 className="teal-text text-darken-4 center-align form-title">
          Building Devices
        </h5>
        {devices &&
          Object.entries(devices).map((device, key) => {
            return (
              <Grid container item xs={4} key={key}>
                <DeviceCard
                  deviceTitle={device[1].name}
                  deviceSrc={device[1].imageUrl}
                  onClick={() =>
                    this.props.history.push({
                      pathname: `/device/${device[1].name}`,
                      state: device[1],
                    })
                  }
                />
              </Grid>
            );
          })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const buildings = state.firestore.ordered.buildings;
  return {
    buildings: buildings,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "buildings" }])
)(withRouter(BuildingDevices));

const DeviceCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <div className="all-devices-card-content">
            <div className="all-devices-card-info">
              <h5 className="card-title">{props.deviceTitle}</h5>
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
