import React, { Component } from "react";
import lightBulb from "../../assets/images/light-bulb.svg";

class DeviceInsight extends Component {
  render() {
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="card device-box border-radius green darken-3 device-insight">
            <img src={lightBulb} alt="Light" className="device-icon" />
            <div className="device-info">
              <span>Device Description:</span>
              <div className="device-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo deserunt quos nesciunt aperiam voluptatibus
                praesentium atque nisi, voluptates voluptatum quam quidem
                officiis non esse excepturi temporibus quae alias quis
                laudantium doloribus dicta sequi a pariatur. Labore molestiae
                voluptates possimus fuga.
              </div>
              <div class="switch">
                <label>
                  Turn on/off the device
                  <input type="checkbox" />
                  <span class="lever"></span>
                </label>
              </div>
              <span>Power consumption:</span>
              <div className="power-consumption">
                <div className="consumption-number">500KW/h</div>
                <div className="consumption-price">1000RSD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceInsight;
