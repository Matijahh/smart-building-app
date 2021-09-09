import React from "react";

/** Chart JS Imports */
import { Line } from "react-chartjs-2";

export default function WholesomeConsumption(props) {
  return (
    <div className="wholesome-consumption-container">
      <h5 className="teal-text text-darken-4 center-align form-title">
        Household Consumption
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
              data: props.household && props.household.consumption,
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
    </div>
  );
}
