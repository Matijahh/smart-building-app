import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/** Material UI Import */
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

/** Images Import */
import noImage from "../../assets/images/noImage.png";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});

class BuildingDevices extends Component {
  render() {
    return (
      <Grid container spacing={1} className="top-three-consumers-container">
        {this.props.devices.map((device) => {
          return (
            <Grid container item xs={4} key={device.id}>
              <DeviceCard
                deviceTitle={device.name}
                deviceSrc={device.src}
                deviceActive={device.active}
                onClick={() => this.props.history.push(`/device/${device.id}`)}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withRouter(BuildingDevices);

const DeviceCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <div className="all-devices-card-content">
            <div className="all-devices-card-info">
              <h5 className="card-title">{props.deviceTitle}</h5>
              <p>{props.deviceActive ? "ACTIVE" : "NOT ACTIVE"}</p>
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
                  borderRadius: 7,
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
      <CardActions>
        <Button size="small" className="card-button" onClick={props.onClick}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};
