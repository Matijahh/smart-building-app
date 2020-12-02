import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    this.props.signIn(this.state);
  }

  render() {
    const { authError } = this.props;
    return (
      <div className="container form-container valign-wrapper sign-in-form">
        <form onSubmit={this.handleSubmit} className="transparent">
          <h5 className="white-text center-align form-title">Sign In</h5>
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
          <div className="input-field transparent center-align">
            <button className="waves-effect waves-light btn green darken-2 white-text">
              Login
            </button>
            <div className="red-text center-align">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
