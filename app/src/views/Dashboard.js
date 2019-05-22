import React from "react";
import { connect } from "react-redux";
import { sleep, fetchSleepData, deleteSleepTime } from "../actions";

import "../styles/Dashboard.css";

class Dashboard extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem("User")),
    posting: false
  };

  goingTosleep = () => {
    this.props
      .sleep()
      .then(success => {
        console.log(success);
        // this.pro
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.props.fetchSleepData();
    console.log(this.props.sleepData);
  }

  deleteTime = id => {
    console.log(id);
    this.props.deleteSleepTime(id);
  };

  render() {
    // console.log(this.state.user);
    return (
      <div className="container">
        <h1 className="user-message">{this.state.user.message}</h1>
        <div className="row">
          <div className="col s12 title">
            {this.state.user.username}'s sleep data
          </div>
          <div className="col s6 subtitle">
            {this.props.sleepData.map(sleep => [
              <span key={Math.random()}>{sleep.timeInBed}</span>,
              <button onClick={() => this.deleteTime(sleep.id)}>X</button>
            ])}
          </div>
          <div className="col s6 subtitle">Testing Materialize</div>
        </div>

        <div className="row-buttons">
          <button
            className="waves-effect waves-light btn col s4"
            onClick={this.goingTosleep}
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
  { sleep, fetchSleepData, deleteSleepTime }
)(Dashboard);
