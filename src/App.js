import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/** Components import */
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import { SignIn } from "./components/auth/SignIn";
import CreatePost from "./components/posts/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1 className="bg-image">S</h1>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
