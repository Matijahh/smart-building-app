import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/** Components import */
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import CreatePost from "./components/posts/CreatePost";
import SignUp from "./components/auth/SignUp";
import Error from "./components/error/Error";
import Rooms from "./components/rooms/Rooms";
import LivingRoom from "./components/rooms/LivingRoom";
import Bedroom from "./components/rooms/Bedroom";
import Kitchen from "./components/rooms/Kitchen";
import Bathroom from "./components/rooms/Bathroom";
import DeviceInsight from "./components/rooms/DeviceInsight";

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
          <Route path="/rooms" component={Rooms} />
          <Route path="/livingroom" component={LivingRoom} />
          <Route path="/bedroom" component={Bedroom} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/bathroom" component={Bathroom} />
          <Route path="/device/:id" component={DeviceInsight} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
