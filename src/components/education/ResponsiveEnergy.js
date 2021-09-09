import React, { Component } from "react";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";

/** Images Imports */
import EnergySaving from "../../assets/images/energy_saving.png";

class ResponsiveEnergy extends Component {
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
          Savings and security through energy efficiency
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
            How to reduce your electricity bill by 10 to 15% and thus save
            money, without giving up comfort and everyday needs and habits for a
            moment? You can achieve this if you behave energy efficiently, and
            it is actually very easy.
          </p>
          <p>
            Energy efficiency refers to technical devices, and to certain
            measures and behaviors, when the goal is to reduce energy
            consumption to a minimum, without compromising the level of comfort
            or efficiency in doing business. Increased efficiency results in
            significant monetary savings, but the direct impact on environmental
            protection should not be neglected. However...
          </p>
          <img
            style={{
              borderRadius: 30,
              boxShadow: `0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
            0 1px 5px 0 rgb(0 0 0 / 20%)`,
              marginBottom: 20,
            }}
            src={EnergySaving}
            alt="EnergySaving"
          />
          <p>
            The method of electricity production has a great impact on the
            climate and the environment. The amount of electricity that can be
            saved if you are energy efficient is like having another power
            plant. Being energy efficient today is a model of behavior in the
            most developed countries of the world and is increasingly becoming a
            reflection of culture. Serbia consumes 2.5 times more electricity
            than the world average per unit of social product.
          </p>
          <p>
            What do we need to do? Small changes in behavior are needed when
            operating household appliances. We need to follow the small tips,
            which we will remind you through a series of texts in the coming
            period.
          </p>
        </div>
      </Grid>
    );
  }
}

export default ResponsiveEnergy;
