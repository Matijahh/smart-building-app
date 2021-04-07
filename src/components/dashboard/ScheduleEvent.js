import React from "react";

/** Material UI Imports */
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ScheduleEvent = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="form-container schedule-event-form">
      <form autoComplete="off" noValidate>
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
          <input type="text" id="title" className="teal-text text-darken-4" />
        </div>
        <div className="input-field">
          <label htmlFor="content" className="teal-text text-darken-4">
            What is the event for?
          </label>
          <textarea
            className="materialize-textarea teal-text text-darken-4"
            id="content"
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
              value={selectedDate}
              onChange={handleDateChange}
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
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </MuiPickersUtilsProvider>

        <div className="form-group-buttons" style={{ marginTop: 20 }}>
          <div className="dashboard-tab-button">Create Event</div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleEvent;
