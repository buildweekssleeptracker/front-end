import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./views/Dashboard";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={HomepageView} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
      </div>
    </Router>
  );
}

export default App;
