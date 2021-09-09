import React from "react";

/** Important Library Imports  */
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

/** Redux Actions Imports */
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
        <NavLink to="/devices" className="teal-text text-darken-4">
          Your Devices
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" className="teal-text text-darken-4">
          Smart Energy
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
