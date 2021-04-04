import React, { Component } from "react";
import errorImage from "../../assets/images/ErrorPageIllustration.svg";

class Error extends Component {
  render() {
    return (
      <div className="error-page-wrapper">
        <img
          style={{
            width: 800,
          }}
          src={errorImage}
          alt="Error"
        />
        <div className="transparent teal-text text-darken-4">
          You must be lost! We'll help you out.{" "}
          <span
            className="btn-error"
            onClick={() => this.props.history.push("/")}
          >
            Go back
          </span>{" "}
          to where you were.
        </div>
      </div>
    );
  }
}

export default Error;
