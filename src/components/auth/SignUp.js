import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="sign-in">
        <p className="brand-logo">SmartHome</p>
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
                type="password"
                id="password"
                className="white-text"
                onChange={this.handleChange}
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
                LastName
              </label>
              <input
                type="text"
                id="lastName"
                className="white-text"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field transparent center-align">
              <button className="waves-effect waves-light btn green darken-2 white-text">
                Sign Up
              </button>
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
