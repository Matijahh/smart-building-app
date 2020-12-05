import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import "materialize-css";
import M from "materialize-css";

import leafLogo from "../../assets/images/leaf-solid.svg";

// TODO: Add switch button to indicate the type of tenant

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      apartmentNumber: 0,
      tenantCouncilPresident: true,
      passVisibility: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  componentDidUpdate() {
    M.AutoInit();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleVisibilityChange() {
    this.setState({
      passVisibility: !this.state.passVisibility,
    });
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="sign-in">
        <p className="brand-logo">
          SmartHome
          <img style={{ width: 15 }} src={leafLogo} alt="logo" />
        </p>
        <div className="container form-container valign-wrapper sign-in-form">
          <form onSubmit={this.handleSubmit} className="transparent">
            <h5 className="white-text center-align form-title">Sign Up</h5>
            <div className="input-field transparent">
              <label htmlFor="email" className="white-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="white-text"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field transparent">
              <label htmlFor="password" className="white-text">
                Password
              </label>
              <input
                type={this.state.passVisibility ? "text" : "password"}
                id="password"
                className="white-text"
                onChange={this.handleChange}
              />
              <i
                className={`far fa-eye${
                  this.state.passVisibility ? "-slash" : ""
                }`}
                onClick={this.handleVisibilityChange}
              />
            </div>
            <div className="input-field transparent">
              <label htmlFor="firstName" className="white-text">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="white-text"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field transparent">
              <label htmlFor="lastName" className="white-text">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="white-text"
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: "flex", marginTop: "-10px", padding: 0 }}>
              <div
                className="input-field white-text select-gender"
                style={{ marginRight: "5%" }}
              >
                <select
                  className="white-text"
                  id="gender"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
              <div
                className="input-field transparent apartment-input"
                style={{ marginRight: "5%" }}
              >
                <label htmlFor="apartmentNumber" className="white-text">
                  Apartment Number
                </label>
                <input
                  type="text"
                  id="apartmentNumber"
                  className="white-text"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-field transparent center-align">
              <button
                type="submit"
                className="waves-effect waves-light btn green darken-2 white-text"
              >
                Sign Up
              </button>
              <div style={{ marginTop: 10 }}>
                <button
                  type="button"
                  className="waves-effect waves-light btn-flat green-text text-darken-2"
                  onClick={() => this.props.history.push("/signin")}
                >
                  Switch to Sign In
                </button>
              </div>
              <div className="red-text center-align">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
