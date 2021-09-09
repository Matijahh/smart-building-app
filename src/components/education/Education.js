import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/** Custom Components Imports */
import Profile from "../dashboard/Profile";
import EnergyLevels from "./EnergyLevels";
import Lights from "./Lights";
import Quiz from "./Quiz";
import ResponsiveEnergy from "./ResponsiveEnergy";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: false,
      responsiveEnergy: true,
      lights: false,
      energyLevels: false,
    };
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            <Profile uid={auth.uid} />
            <div
              className="dashboard-group-buttons"
              style={{ alignItems: "initial", marginLeft: 32 }}
            >
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.responsiveEnergy && "#004d40",
                  color: this.state.responsiveEnergy && "white",
                }}
                onClick={() => {
                  this.setState({
                    quiz: false,
                    responsiveEnergy: true,
                    lights: false,
                    energyLevels: false,
                  });
                }}
              >
                Savings and security through energy efficiency
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.lights && "#004d40",
                  color: this.state.lights && "white",
                }}
                onClick={() => {
                  this.setState({
                    quiz: false,
                    responsiveEnergy: false,
                    lights: true,
                    energyLevels: false,
                  });
                }}
              >
                Lights
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.energyLevels && "#004d40",
                  color: this.state.energyLevels && "white",
                }}
                onClick={() => {
                  this.setState({
                    quiz: false,
                    responsiveEnergy: false,
                    lights: false,
                    energyLevels: true,
                  });
                }}
              >
                Energy classes and electricity consumption
              </div>
              <div
                className="dashboard-tab-button"
                style={{
                  backgroundColor: this.state.quiz && "#004d40",
                  color: this.state.quiz && "white",
                }}
                onClick={() => {
                  this.setState({
                    quiz: true,
                    responsiveEnergy: false,
                    lights: false,
                    energyLevels: false,
                  });
                }}
              >
                Take the quiz
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            {this.state.quiz && <Quiz />}
            {this.state.responsiveEnergy && <ResponsiveEnergy />}
            {this.state.lights && <Lights />}
            {this.state.energyLevels && <EnergyLevels />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(Education);
