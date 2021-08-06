import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Materialize Imports */
import "materialize-css";

/** Redux Actions Imports */
import { createTenant } from "../../store/actions/postActions";

class AddNewTenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
      gender: "",
      household: "",
      tcp: false,
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
    this.props.createTenant(this.state);
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="form-container add-new-tenant-form">
        <form onSubmit={this.handleSubmit}>
          <h5 className="teal-text text-darken-4 center-align form-title">
            Add New Tenant
          </h5>
          <h5
            className="teal-text text-darken-4 center-align form-title"
            style={{ fontSize: 12, margin: 0, padding: 0 }}
          >
            TCP Feature Only
          </h5>
          <div className="input-field">
            <label htmlFor="email" className="teal-text text-darken-4">
              Email
            </label>
            <input
              name="email"
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
              name="password"
              type={"password"}
              id="password"
              className="teal-text text-darken-4"
              onChange={this.handleChange}
            />
            <i className={`far fa-eye`} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName" className="teal-text text-darken-4">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              id="name"
              className="teal-text text-darken-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName" className="teal-text text-darken-4">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              id="surname"
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
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input-field teal-text text-darken-4 select-gender">
              <select
                className="teal-text text-darken-4"
                id="household"
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
                  Apartment Number
                </option>
                {this.props.households &&
                  this.props.households.map((household, key) => (
                    <option key={key} value={`${household.id}`}>
                      {household.numOfApartment}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-group-buttons">
            <button
              className="dashboard-tab-button"
              onClick={() => this.setState({ submitted: true })}
            >
              {this.state.submitted ? "Tenant is added" : "Add New Tenant"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    households: state.firestore.ordered.households,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTenant: (tenant) => dispatch(createTenant(tenant)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "households" }])
)(AddNewTenant);
