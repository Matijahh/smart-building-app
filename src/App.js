import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/** Components import */
import Navbar from "./components/layout/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
