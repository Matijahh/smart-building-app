import React from "react";

/** Materialize Imports */
import "materialize-css";

const AddNewTenant = () => {
  return (
    <div className="form-container add-new-tenant-form">
      <form autoComplete="off" noValidate>
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
            id="firstName"
            className="teal-text text-darken-4"
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName" className="teal-text text-darken-4">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            className="teal-text text-darken-4"
          />
        </div>
        <div style={{ display: "flex", marginTop: "-10px", padding: 0 }}>
          <div
            className="input-field teal-text text-darken-4 select-gender"
            style={{ marginRight: "5%" }}
          >
            <select className="teal-text text-darken-4" id="gender">
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="input-field transparent apartment-input">
            <label
              htmlFor="apartmentNumber"
              className="teal-text text-darken-4"
            >
              Apartment Number
            </label>
            <input
              name="apartment"
              type="text"
              id="apartmentNumber"
              className="teal-text text-darken-4"
            />
          </div>
        </div>
        <div className="form-group-buttons">
          <div className="dashboard-tab-button">Add New Tenant</div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTenant;
