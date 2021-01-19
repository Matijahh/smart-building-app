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

/** Chart JS Imports */
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

class TopThreeConsumers extends Component {
  render() {
    return (
      <Grid container spacing={10} className="top-three-consumers-container">
        <Grid container item xs={4}>
          <ConsumerCard
            deviceTitle={
              this.props.topThree.first && this.props.topThree.first.name
            }
            deviceDesc={
              this.props.topThree.first && this.props.topThree.first.description
            }
            onClick={() => {
              this.props.history.push(
                `/device/${
                  this.props.topThree.first && this.props.topThree.first.id
                }`
              );
            }}
          />
        </Grid>
        <Grid container item xs={4}>
          <ConsumerCard
            deviceTitle={
              this.props.topThree.second && this.props.topThree.second.name
            }
            deviceDesc={
              this.props.topThree.second &&
              this.props.topThree.second.description
            }
            onClick={() => {
              this.props.history.push(
                `/device/${
                  this.props.topThree.second && this.props.topThree.second.id
                }`
              );
            }}
          />
        </Grid>
        <Grid container item xs={4}>
          <ConsumerCard
            deviceTitle={
              this.props.topThree.third && this.props.topThree.third.name
            }
            deviceDesc={
              this.props.topThree.third && this.props.topThree.third.description
            }
            onClick={() => {
              this.props.history.push(
                `/device/${
                  this.props.topThree.third && this.props.topThree.third.id
                }`
              );
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(TopThreeConsumers);

const ConsumerCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <h5 className="card-title">{props.deviceTitle}</h5>
          <p className="top-three-card-description">{props.deviceDesc}</p>
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
        <Button size="small" className="card-button" onClick={props.onClick}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};
