import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create">Schedule Event</NavLink>
      </li>
      <li>
        <NavLink to="/devices">Your Devices</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green darken-3">
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
