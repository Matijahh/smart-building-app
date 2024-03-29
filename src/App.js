import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/** Components Import */
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import CreatePost from "./components/posts/CreatePost";
import SignUp from "./components/auth/SignUp";
import Error from "./components/error/Error";
import YourDevices from "./components/devices/YourDevices";
import DeviceInfo from "./components/devices/DeviceInfo";
import Education from "./components/education/Education";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1 className="bg-image">S</h1>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
          <Route path="/devices" component={YourDevices} />
          <Route path="/device/:id" component={DeviceInfo} />
          <Route path="/education" component={Education} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
