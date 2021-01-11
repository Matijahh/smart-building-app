import React from "react";
import PropTypes from "prop-types";

/** Material UI Import */
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/** Custom Components Import */
import TopThreeConsumers from "./TopThreeConsumers";
import AllDevices from "./AllDevices";
import WholesomeConsumption from "./WholesomeConsumption";

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

export default function YourDevices() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="your-devices-container">
      <div className="your-devices-tabs">
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="tabs-container"
        >
          <Tab label="Top Three Consumers" {...a11yProps(0)} />
          <Tab label="All Devices" {...a11yProps(1)} />
          <Tab label="Wholesome Consumption " {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} className="tab-panel">
          <TopThreeConsumers />
        </TabPanel>
        <TabPanel value={value} index={1} className="tab-panel">
          <AllDevices />
        </TabPanel>
        <TabPanel value={value} index={2} className="tab-panel">
          <WholesomeConsumption />
        </TabPanel>
      </div>
    </div>
  );
}
