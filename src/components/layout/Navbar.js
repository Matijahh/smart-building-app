import React from "react";

/** Important Library Imports  */
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/** Redux Actions Imports */
import { signOut } from "../../store/actions/authActions";

/** Images Imports */
import leafLogo from "../../assets/images/leaf-solid.svg";

/** Custom Components Imports */
import SignedInLinks from "./SignedInLinks";

const Navbar = (props) => {
  const { auth, profile } = props;
  return auth.uid ? (
    <nav className="nav-wrapper transparent z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo teal-text text-darken-4">
          SmartHome
          <img style={{ width: 30 }} src={leafLogo} alt="logo" />
        </Link>
        <SignedInLinks profile={profile} />
      </div>
    </nav>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
