import React, { Component } from "react";
import errorImage from "../../assets/images/404ErrorPage.svg";

class Error extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          top: 100,
        }}
      >
        <img
          style={{
            width: 800,
          }}
          src={errorImage}
          alt="Error"
        />
        <button
          className="btn-error waves-effect waves-light btn teal darken-4 white-text"
          onClick={() => this.props.history.push("/")}
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default Error;
