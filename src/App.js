import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact path="/" component={HomepageView} />
        <Route path="/login" component={LoginView} />
      </div>
    </Router>
  );
}

export default App;
