import React, { Component } from "react";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";

/** Images Imports */
import EnergyClasses from "../../assets/images/energy-classes.png";

class EnergyLevels extends Component {
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
          Energy classes and electricity consumption
        </h5>
        <div
          className="text-paragraphs"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <p>
            If you buy new devices and choose those with the "energy star" label
            - ENERGY STAR, that is a smart choice, because such devices are in
            the group with the lowest electricity consumption.
          </p>
          <p>
            In hardware stores, almost all home appliances and electrical
            appliances have labels with energy class labels and the average
            power consumption when using those appliances. The scale of energy
            classes is expressed by the letters: "A" - "B" - "C" - "D" - "E" -
            "F" - "G"…
          </p>
          <p>
            The most energy efficient appliances and devices, with the lowest
            average electricity consumption are devices and appliances with the
            labels: "AAA", "AA", "A" and "B". When buying appliances such as a
            TV or monitor, it is important to pay attention to the consumption
            in the "stand by" mode. The new appliances have a visibly marked
            consumption.
          </p>
          <img
            style={{ width: 300, margin: "20px auto" }}
            src={EnergyClasses}
            alt="Energy Classes"
          />
        </div>
      </Grid>
    );
  }
}

export default EnergyLevels;
