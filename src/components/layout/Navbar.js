import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper transparent z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo">
          SmartHome
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
