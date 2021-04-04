import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import leafLogo from "../../assets/images/leaf-solid.svg";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passVisibility: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
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
        <div className="form-container sign-in-form">
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <h5 className="teal-text text-darken-4 center-align form-title">
              Sign In
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
            <div className="input-field center-align">
              <button type="submit" className="btn teal darken-4 white-text">
                Login
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
