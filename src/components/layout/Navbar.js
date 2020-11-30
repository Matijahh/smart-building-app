import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper green lighten-2 z-depth-0">
      <div className="container">
        <Link to="/" className="brand-logo">
          SmartBuilding
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
