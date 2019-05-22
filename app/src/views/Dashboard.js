import React from "react";
import { connect } from "react-redux";
import { sleep, fetchSleepData, deleteSleepTime, wakingUp } from "../actions";

// Emojis
import sad from "../assets/emoji-sad-1.png";
import meh from "../assets/emoji-meh-2.png";
import happy from "../assets/emoji-happy-3.png";
import excited from "../assets/emoji-excited-4.png";

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
    // console.log(id);
    this.props.deleteSleepTime(id);
  };

  wakeUp = id => {
    this.props.wakingUp(id);
  };

  render() {
    // console.log(this.state.user);
    return (
      <div className="container">
        <h1 className="user-message">{this.state.user.message}</h1>

        <div
          className="waves-effect waves-light btn"
          onClick={this.goingTosleep}
        >
          <span>Going To Sleep</span>{" "}
          <i className="material-icons right">cloud</i>
        </div>

        <div className="title">{this.state.user.username}'s sleep data</div>
        <div className="sleep-data-map">
          {this.props.sleepData.map(sleep => {
            return (
              <div className="sleep-card">
                <h3>Sleep Post</h3>
                <div className="times">
                  <span className="sleep-time">Bedtime: {sleep.timeInBed}</span>
                  <span className="wake-time">
                    {sleep.timeWakeUp
                      ? `You woke up at ${sleep.timeWakeUp}`
                      : "You haven't woken up yet!"}
                  </span>
                </div>
                <div className="button-div">
                  <button
                    className="button-type"
                    onClick={() => this.deleteTime(sleep.id)}
                  >
                    X
                  </button>
                  <button
                    className="button-type"
                    onClick={() => this.wakeUp(sleep.id)}
                  >
                    Wake Up
                  </button>
                </div>
                <span className="emoji-title">
                  How did tonight's sleep feel?
                </span>
                <div className="emoji-div">
                  <div className="emoji sad">
                    <img src={sad} alt="Sad emoji" />
                  </div>
                  <div className="emoji meh">
                    <img src={meh} alt="Meh emoji" />
                  </div>
                  <div className="emoji happy">
                    <img src={happy} alt="Happy emoji" />
                  </div>
                  <div className="emoji excited">
                    <img src={excited} alt="Excited emoji" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <button
            className="waves-effect waves-light btn col s4"
            onClick={() => this.wakeUp()}
          >
            Waking Up <i className="material-icons left">cloud</i>
          </button> */}
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
  { sleep, fetchSleepData, deleteSleepTime, wakingUp }
)(Dashboard);

// {this.props.sleepData.map(sleep => [
//   <span key={Math.random()}>{sleep.timeInBed}</span>,
//   <button onClick={() => this.deleteTime(sleep.id)}>X</button>,
//   <button onClick={() => this.wakeUp(sleep.id)}>Wake Up</button>
// ])}
