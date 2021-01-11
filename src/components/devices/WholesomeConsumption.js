import React from "react";

/** Material UI Import */
import Grid from "@material-ui/core/Grid";

/** Chart JS Imports */
import { Line, Doughnut, Bar } from "react-chartjs-2";

export default function WholesomeConsumption() {
  return (
    <div className="wholesome-consumption-container">
      <h3 className="title">Consumption 2020</h3>
      <Line
        data={{
          labels: [
            "January 2020",
            "February 2020",
            "March 2020",
            "April 2020",
            "May 2020",
            "June 2020",
            "July 2020",
            "August 2020",
            "September 2020",
            "October 2020",
            "November 2020",
            "December 2020",
          ],
          datasets: [
            {
              label: "Consumption in kWh",
              data: [
                244,
                326,
                478,
                120,
                566,
                234,
                120,
                204,
                444,
                321,
                544,
                670,
              ],
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
        width={600}
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
      <Grid container spacing={10} className="wholesome-consumption-two-rows">
        <Grid container item xs={6}>
          <h3 className="title">Consumption Last Week</h3>
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
            height={50}
            width={50}
          />
        </Grid>
        <Grid container item xs={6}>
          <h3 className="title">Consumption Last Hour</h3>
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
                  backgroundColor: ["#004d40", "#00695c", "#00796b", "#009688"],
                  borderColor: ["#004d40", "#00695c", "#00796b", "#009688"],
                  borderWidth: 10,
                  fill: "none",
                  lineTension: 0,
                  pointBackgroundColor: "#00897b",
                  pointBorderColor: "#00897b",
                },
              ],
            }}
            height={200}
            width={600}
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
    </div>
  );
}
