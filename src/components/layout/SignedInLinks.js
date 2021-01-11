import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="teal-text text-darken-4">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" className="teal-text text-darken-4">
          Schedule Event
        </NavLink>
      </li>
      <li>
        <NavLink to="/devices" className="teal-text text-darken-4">
          Your Devices
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          onClick={props.signOut}
          className="teal-text text-darken-4"
        >
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating teal darken-4">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
