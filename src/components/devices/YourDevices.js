import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

/** Material UI Import */
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/** Custom Components Import */
import TopThreeConsumers from "./TopThreeConsumers";
import AllDevices from "./AllDevices";
import WholesomeConsumption from "./WholesomeConsumption";
import BuildingDevices from "./BuildingDevices";
import ParkingSpots from "./ParkingSpots";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

class YourDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { devices, auth } = this.props;
    const userDevices =
      devices &&
      devices.filter((device) => {
        return device.user === auth.uid;
      });
    const buildingDevices =
      devices &&
      devices.filter((device) => {
        return device.user === "all";
      });
    const topThree = {
      first: devices && devices[0],
      second: devices && devices[1],
      third: devices && devices[2],
    };
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="your-devices-container">
        <div className="your-devices-tabs">
          <Tabs
            orientation="vertical"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="Vertical tabs example"
            className="tabs-container"
          >
            <Tab label="Top Three Consumers" {...a11yProps(0)} />
            <Tab label="All Devices" {...a11yProps(1)} />
            <Tab label="Wholesome Consumption " {...a11yProps(2)} />
            <Tab label="Building Devices " {...a11yProps(3)} />
            <Tab label="Parking Spots " {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={this.state.value} index={0} className="tab-panel">
            <TopThreeConsumers topThree={topThree} />
          </TabPanel>
          <TabPanel value={this.state.value} index={1} className="tab-panel">
            <AllDevices devices={userDevices} />
          </TabPanel>
          <TabPanel value={this.state.value} index={2} className="tab-panel">
            <WholesomeConsumption />
          </TabPanel>
          <TabPanel value={this.state.value} index={3} className="tab-panel">
            <BuildingDevices devices={buildingDevices} />
          </TabPanel>
          <TabPanel value={this.state.value} index={4} className="tab-panel">
            <ParkingSpots />
          </TabPanel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.firestore.ordered.devices,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "devices" }])
)(YourDevices);
