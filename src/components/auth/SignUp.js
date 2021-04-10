import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/** Materialize Imports */
import "materialize-css";
import M from "materialize-css";

/** Redux Actions Imports */
import { signUp } from "../../store/actions/authActions";

/** Images Imports */
import leafLogo from "../../assets/images/leaf-solid.svg";

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
      tenantCouncilPresident: false,
      passVisibility: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleTenantCouncilPresidentChange = this.handleTenantCouncilPresidentChange.bind(
      this
    );
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

  handleTenantCouncilPresidentChange() {
    this.setState({
      tenantCouncilPresident: !this.state.tenantCouncilPresident,
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
        <div className="form-container sign-in-form">
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <h5 className="teal-text text-darken-4 center-align form-title">
              Sign Up
            </h5>
            <h5
              className="teal-text text-darken-4 center-align form-title"
              style={{ fontSize: 12, margin: 0, padding: 0 }}
            >
              Admins only
            </h5>
            <div className="input-field">
              <label htmlFor="email" className="teal-text text-darken-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="teal-text text-darken-4"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="teal-text text-darken-4">
                Password
              </label>
              <input
                type={this.state.passVisibility ? "text" : "password"}
                id="password"
                className="teal-text text-darken-4"
                onChange={this.handleChange}
              />
              <i
                className={`far fa-eye${
                  this.state.passVisibility ? "-slash" : ""
                }`}
                onClick={this.handleVisibilityChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="firstName" className="teal-text text-darken-4">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="teal-text text-darken-4"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName" className="teal-text text-darken-4">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="teal-text text-darken-4"
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: "flex", marginTop: "-10px", padding: 0 }}>
              <div
                className="input-field teal-text text-darken-4 select-gender"
                style={{ marginRight: "5%" }}
              >
                <select
                  className="teal-text text-darken-4"
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
                <label
                  htmlFor="apartmentNumber"
                  className="teal-text text-darken-4"
                >
                  Apartment Number
                </label>
                <input
                  type="text"
                  id="apartmentNumber"
                  className="teal-text text-darken-4"
                  onChange={this.handleChange}
                />
              </div>
              <div class="switch">
                <label>
                  <input
                    type="checkbox"
                    onChange={this.handleTenantCouncilPresidentChange}
                  />
                  <span class="lever"></span>
                  Tenant Council Pres
                </label>
              </div>
            </div>
            <div className="input-field center-align">
              <button type="submit" className="btn teal darken-4 white-text">
                Sign Up
              </button>
              <div className="error-message red-text text-darken-4 center-align">
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
