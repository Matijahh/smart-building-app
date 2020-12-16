import React, { Component } from "react";

//TODO: Add more items to database
//TODO: Make diagrams of power consumption

class Rooms extends Component {
  render() {
    return (
      <div className="container rooms-container">
        <div className="center-alignment">
          <div className="row">
            <div className="col s12 m6">
              <div
                className="card room-box border-radius living-room"
                onClick={() => this.props.history.push("/livingroom")}
              >
                <span className="card-title center-align white-text">
                  Living Room
                </span>
                <div className="overlay border-radius"></div>
              </div>
            </div>
            <div className="col s12 m6">
              <div
                className="card room-box border-radius bedroom"
                onClick={() => this.props.history.push("/bedroom")}
              >
                <span className="card-title center-align white-text">
                  Bedroom
                </span>
                <div className="overlay border-radius"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div
                className="card room-box border-radius kitchen"
                onClick={() => this.props.history.push("/kitchen")}
              >
                <span className="card-title center-align white-text">
                  Kitchen
                </span>
                <div className="overlay border-radius"></div>
              </div>
            </div>
            <div className="col s12 m6">
              <div
                className="card room-box border-radius bathroom"
                onClick={() => this.props.history.push("/bathroom")}
              >
                <span className="card-title center-align white-text">
                  Bathroom
                </span>
                <div className="overlay border-radius"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
