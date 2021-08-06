import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/** Material UI Imports */
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

/** Redux Actions Imports */
import { createEvent } from "../../store/actions/postActions";

class ScheduleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      from: null,
      to: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleStartDateChange(e) {
    this.setState({
      from: e,
    });
  }

  handleEndDateChange(e) {
    this.setState({
      to: e,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="form-container schedule-event-form">
        <form onSubmit={this.handleSubmit}>
          <h5 className="teal-text text-darken-4 center-align form-title">
            Schedule Event
          </h5>
          <h5
            className="teal-text text-darken-4 center-align form-title"
            style={{ fontSize: 12, margin: 0, padding: 0 }}
          >
            TCP Feature Only
          </h5>
          <div className="input-field">
            <label htmlFor="title" className="teal-text text-darken-4">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              className="teal-text text-darken-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content" className="teal-text text-darken-4">
              What is the event for?
            </label>
            <textarea
              className="materialize-textarea teal-text text-darken-4"
              id="description"
              onChange={this.handleChange}
            />
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Event Start"
                margin="normal"
                value={this.state.from}
                onChange={this.handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <span className="datepicker-dot">-</span>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Event End"
                margin="normal"
                value={this.state.to}
                onChange={this.handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
          </MuiPickersUtilsProvider>

          <div className="form-group-buttons" style={{ marginTop: 20 }}>
            <button
              className="dashboard-tab-button"
              onClick={() => this.setState({ submitted: true })}
            >
              {this.state.submitted ? "Event is created" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (post) => dispatch(createEvent(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEvent);
