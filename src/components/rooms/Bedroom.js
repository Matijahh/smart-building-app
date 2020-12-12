import React, { Component } from "react";
import lamp from "../../assets/images/lamp.svg";
import alarmClock from "../../assets/images/alarm-clock.svg";
import mouse from "../../assets/images/mouse.svg";
import plant from "../../assets/images/plant.svg";

class Bedroom extends Component {
  render() {
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={lamp} alt="Lamp" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the lamp
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={mouse} alt="Mouse" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the computer
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={alarmClock} alt="Alarm" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the alarm
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={plant} alt="Plant" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Water my plants
                    </label>
                  </div>
                  <button
                    type="text"
                    className="waves-effect waves-light btn green darken-1 white-text"
                  >
                    See the insights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bedroom;
