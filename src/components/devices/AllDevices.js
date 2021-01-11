import React from "react";

/** Material UI Import */
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

/** Custom Components Import */
import image from "../../assets/images/kitchen.jpg";
import image2 from "../../assets/images/bedroom.jpg";
import image3 from "../../assets/images/living room.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function AllDevices() {
  return (
    <Grid container spacing={1} className="top-three-consumers-container">
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #1"
          deviceRoom="Kitchen"
          deviceSrc={image}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #2"
          deviceRoom="Bedroom"
          deviceSrc={image2}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
      <Grid container item xs={4}>
        <DeviceCard
          deviceTitle="Device #3"
          deviceRoom="Living room"
          deviceSrc={image3}
        />
      </Grid>
    </Grid>
  );
}

const DeviceCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div className="all-devices-card-content">
            <div className="all-devices-card-info">
              <h5 className="card-title">{props.deviceTitle}</h5>
              <p>{props.deviceRoom}</p>
            </div>
            <img
              className="all-devices-card-image"
              src={props.deviceSrc}
              alt={props.deviceTitle}
            />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className="card-button">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
