import React, { Component } from "react";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";

class Lights extends Component {
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
          Lights
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
            Did you know that by using energy efficiently, we can achieve
            significant savings in electricity consumption and thus reduce
            electricity bills?
          </p>
          <p>
            Six ordinary 25 W bulbs give together the same amount of light as
            one 100 W bulb. Not only that, but such a "bouquet" of bulbs
            consumes as much as 50% more energy.
          </p>
          <p>
            The simplest way to be energy efficient is to make the most of
            daylight. Therefore, clean the windows regularly, avoid placing too
            many plants in front of the windows as well as dark curtains, and
            set the tables in the work rooms so that they are maximally lit by
            the sun.
          </p>
          <p>
            Energy-saving light bulbs for the same amount of lighting consume
            five to six times less electricity and have up to ten times longer
            service life compared to ordinary ones. So, ordinary light bulbs
            last on average up to 1,000 hours, and energy-saving ones more than
            10,000.
          </p>
          <p>
            Also, with ordinary light bulbs, only 5% of the invested energy is
            converted into light, while the rest is converted into heat.
            Therefore, the light should be turned off in rooms where people
            rarely stay.
          </p>
          <p>
            It is best to choose a class A light bulb. The B-class light bulb is
            dimmer, but it does not consume much more electricity than the
            A-class light bulb, so it can be bought if it is reasonably priced.
          </p>
          <p>
            The choice of bulb power depends on where it should be placed. The
            table shows the approximate power ratio of classic incandescent
            bulbs and "energy-saving bulbs", so it is best to orient yourself
            that way.
          </p>
          <div style={{ width: "100%", marginBottom: 20 }}>
            <div className="table-row">
              <p className="table-item">Classic Light Bulb</p>
              <p className="table-item">Saving Light Bulb</p>
            </div>
            <div className="table-row">
              <p className="table-item">40W</p>
              <p className="table-item">9 – 13W</p>
            </div>
            <div className="table-row">
              <p className="table-item">60W</p>
              <p className="table-item">13 – 15W</p>
            </div>
            <div className="table-row">
              <p className="table-item">75W</p>
              <p className="table-item">18 – 25W</p>
            </div>
            <div className="table-row">
              <p className="table-item">100W</p>
              <p className="table-item">23 – 30W</p>
            </div>
            <div className="table-row">
              <p className="table-item">150W</p>
              <p className="table-item">30 – 52W</p>
            </div>
          </div>
          <p>
            Color light is professionally called temperature light. In general,
            there are two colors of light that produce "energy-saving light
            bulbs" - white and yellow light, ie warm / soft white light and
            daylight white light. It is recommended to use soft / warm white
            light for the rooms where you are staying. uses white light for
            reading, as it creates a better contrast of black letters on white
            paper.Otherwise, the color of the light is expressed in Kelvin (K).
            The smaller the number, the light is “warmer.” The packaging should
            also contain this information.
          </p>
          <p>
            Although the shape of the light bulb may sound trivial, care must be
            taken for which light bulb "energy-saving light bulb" is purchased,
            because there are different shapes, from rod to spiral. They differ
            mainly in length or height. . in pantries) require shorter bulbs, so
            it is best to take a "energy-saving bulb" spiral shape.
          </p>
        </div>
      </Grid>
    );
  }
}

export default Lights;
