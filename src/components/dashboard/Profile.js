import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  const { user, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (user) {
    return (
      <div className="container section">
        <div className="card border-radius">
          <div className="card-content profile-card">
            <div>
              <i class="far fa-user-circle"></i>
              <span className="card-title center-align teal-text text-darken-4">
                {user.firstName} {user.lastName}
              </span>
              {user.tenantCouncilPresident && (
                <span className="sticker">TCP</span>
              )}
            </div>
          </div>
          <div className="card-action profile-card-action grey lighten-4 grey-text border-radius">
            <p className="center-align grey-text text-darken-2">
              Apartment number:{" "}
              <span className="bolder">{user.apartmentNumber}</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center-align">
        <p className="teal-text text-darken-4 loader-text">Loading user...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const uid = ownProps.uid;
  const users = state.firestore.data.users;
  const user = users ? users[uid] : null;
  return {
    user: user,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(Profile);
