import React, { Component } from "react";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";

/** Custom Components Imports */
import StartUp from "./StartUp";

class Quiz extends Component {
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
          Quiz
        </h5>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <StartUp />
        </div>
      </Grid>
    );
  }
}

export default Quiz;
