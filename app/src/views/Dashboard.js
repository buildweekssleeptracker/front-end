import React from "react";
import { connect } from "react-redux";

import "../styles/Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 title">Your sleep data</div>
          <div className="col s6 subtitle">Testing Materialize</div>
          <div className="col s6 subtitle">Testing Materialize</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Dashboard);
