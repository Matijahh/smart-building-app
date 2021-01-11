import React from "react";

/** Material UI Import */
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

/** Chart JS Imports */
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function TopThreeConsumers() {
  return (
    <Grid container spacing={10} className="top-three-consumers-container">
      <Grid container item xs={4}>
        <ConsumerCard
          deviceTitle="Device #1"
          deviceDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita hic, impedit saepe repellendus excepturi..."
        />
      </Grid>
      <Grid container item xs={4}>
        <ConsumerCard
          deviceTitle="Device #2"
          deviceDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita hic, impedit saepe repellendus excepturi..."
        />
      </Grid>
      <Grid container item xs={4}>
        <ConsumerCard
          deviceTitle="Device #3"
          deviceDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita hic, impedit saepe repellendus excepturi..."
        />
      </Grid>
    </Grid>
  );
}

const ConsumerCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h5 className="card-title">{props.deviceTitle}</h5>
          <p>{props.deviceDesc}</p>
          <Doughnut
            className="doughnut-chart"
            data={{
              labels: [
                "January 2020",
                "May 2020",
                "June 2020",
                "September 2020",
                "October 2020",
                "December 2020",
              ],
              datasets: [
                {
                  label: "Days",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "#004d40",
                    "#00695c",
                    "#00796b",
                    "#009688",
                    "#80cbc4",
                    "#b2dfdb",
                  ],
                  borderColor: [
                    "#004d40",
                    "#00695c",
                    "#00796b",
                    "#009688",
                    "#80cbc4",
                    "#b2dfdb",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={50}
            width={50}
          />
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
