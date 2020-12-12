import React, { Component } from "react";
import dishes from "../../assets/images/dishes.svg";
import extractor from "../../assets/images/extractor-hood.svg";
import oven from "../../assets/images/oven.svg";
import cooking from "../../assets/images/cooking.svg";

class Kitchen extends Component {
  render() {
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={cooking} alt="Cooking" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the heat
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
                <img src={dishes} alt="Dishes" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Wash the dishes
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
                <img src={extractor} alt="Extractor" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Start the hood extractor
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
                <img src={oven} alt="Oven" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the oven
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

export default Kitchen;
