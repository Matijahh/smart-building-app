import React, { Component } from "react";
import wc from "../../assets/images/wc.svg";
import washBasin from "../../assets/images/wash-basin.svg";
import towel from "../../assets/images/towel.svg";
import bathroom from "../../assets/images/bathroom.svg";

class Bathroom extends Component {
  render() {
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            <div className="col s12 m6">
              <div className="card device-box border-radius green darken-3">
                <img src={wc} alt="Wc" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the toilet
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
                <img src={bathroom} alt="Bathroom" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Turn on/off the shower
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
                <img src={towel} alt="Towel" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Dry my towels
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
                <img src={washBasin} alt="Wash" className="device-icon" />
                <div className="device-info">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                      Clean the wash basin
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

export default Bathroom;
