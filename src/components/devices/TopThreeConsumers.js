import React, { Component } from "react";

/** Important Library Imports  */
import { withRouter } from "react-router-dom";

/** Material UI Imports */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

/** Chart JS Imports */
import { Doughnut } from "react-chartjs-2";

class TopThreeConsumers extends Component {
  render() {
    return (
      <div className="top-three-consumers-container">
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
        <ConsumerCard
          deviceTitle={
            this.props.topThree.second && this.props.topThree.second.name
          }
          deviceDesc={
            this.props.topThree.second && this.props.topThree.second.description
          }
          onClick={() => {
            this.props.history.push(
              `/device/${
                this.props.topThree.second && this.props.topThree.second.id
              }`
            );
          }}
        />
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
      </div>
    );
  }
}

export default withRouter(TopThreeConsumers);

const ConsumerCard = (props) => {
  return (
    <Card className="consumer-card-wrapper" style={{ borderRadius: 30 }}>
      <CardActionArea onClick={props.onClick}>
        <CardContent className="consumer-card-content">
          <h5 className="card-title" style={{ minWidth: 200 }}>
            {props.deviceTitle}
          </h5>
          <p className="top-three-card-description">{props.deviceDesc}</p>
          <div style={{ width: 200 }}>
            <Doughnut
              className="doughnut-chart"
              data={{
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
              height={150}
              width={200}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
