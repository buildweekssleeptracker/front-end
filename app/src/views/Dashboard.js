import React from "react";
import { connect } from "react-redux";
import { sleep } from "../actions";

import "../styles/Dashboard.css";

class Dashboard extends React.Component {
  state = {
    userIn: this.props.user
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 title">
            {this.state.userIn.username}'s sleep data
          </div>
          <div className="col s6 subtitle">Testing Materialize</div>
          <div className="col s6 subtitle">Testing Materialize</div>
        </div>

        <div className="row-buttons">
          <button
            className="waves-effect waves-light btn col s4"
            onClick={this.props.sleep}
          >
            Going To Sleep <i className="material-icons right">cloud</i>
          </button>

          <button className="waves-effect waves-light btn col s4">
            Waking Up <i className="material-icons left">cloud</i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    sleepTime: state.sleepTime
  };
};
export default connect(
  mapStateToProps,
  { sleep }
)(Dashboard);
