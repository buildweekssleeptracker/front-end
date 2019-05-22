import React from "react";
import { connect } from "react-redux";
import { sleep, fetchSleepData } from "../actions";

import "../styles/Dashboard.css";

class Dashboard extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("User"))
  };

  componentDidMount() {
    this.props.fetchSleepData();
    console.log(this.props.sleepData);
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="container">
        <h1 className="user-message">{this.state.user.message}</h1>
        <div className="row">
          <div className="col s12 title">
            {this.state.user.username}'s sleep data
          </div>
          <div className="col s6 subtitle">
            {this.props.sleepData.map(sleep => (
              <h1 key={sleep.id}>{sleep.timeInBed}</h1>
            ))}
          </div>
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
    sleepTime: state.sleepTime,
    sleepData: state.sleepData
  };
};
export default connect(
  mapStateToProps,
  { sleep, fetchSleepData }
)(Dashboard);
