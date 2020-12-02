import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import SignedInLinks from "./SignedInLinks";

const Navbar = (props) => {
  const { auth } = props;
  return auth.uid ? (
    <nav className="nav-wrapper transparent z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo">
          SmartHome
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
