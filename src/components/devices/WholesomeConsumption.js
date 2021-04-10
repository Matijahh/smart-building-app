import React from "react";

/** Chart JS Imports */
import { Line } from "react-chartjs-2";

export default function WholesomeConsumption() {
  return (
    <div className="wholesome-consumption-container">
      <h5 className="teal-text text-darken-4 center-align form-title">
        Household Consumption
      </h5>
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
