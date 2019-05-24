import React from "react";
import { connect } from "react-redux";
import {
  sleep,
  fetchSleepData,
  deleteSleepTime,
  wakingUp,
  sendEmoji
} from "../actions";

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
    // active: false -- Won't work until I refactor the sleep cards to be individual components holding their own state.
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

  sendSad = id => {
    this.props.sendEmoji(id, 1);
    // this.setState({
    //   ...this.state,
    //   active: 1
    // });
  };

  sendMeh = id => {
    this.props.sendEmoji(id, 2);
    // this.setState({
    //   ...this.state,
    //   active: 2
    // });
  };

  sendHappy = id => {
    this.props.sendEmoji(id, 3);
    // this.setState({
    //   ...this.state,
    //   active: 3
    // });
  };

  sendExcited = id => {
    this.props.sendEmoji(id, 4);
    // this.setState({
    //   ...this.state,
    //   active: 4
    // });
  };

  render() {
    // After build-week is graded, refactor sleep cards to be their own component. START THINKING MORE IN COMPONENTS!

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

        <div className="title">{this.state.user.username}'s sleeping sards</div>
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
                    Delete
                  </button>
                  <button
                    className="button-type"
                    onClick={() => this.wakeUp(sleep.id)}
                  >
                    Wake Up
                  </button>
                </div>

                {sleep.timeWakeUp && (
                  <React.Fragment>
                    <span className="emoji-title">
                      How did tonight's sleep feel?
                    </span>
                    <div className="emoji-div">
                      <div
                        className={
                          this.state.active === 1
                            ? "emoji sad active-emoji"
                            : "emoji sad"
                        }
                      >
                        <img
                          src={sad}
                          alt="Sad emoji"
                          onClick={() => this.sendSad(sleep.id)}
                        />
                      </div>
                      <div
                        className={
                          this.state.active === 2
                            ? "emoji meh active-emoji"
                            : "emoji meh"
                        }
                      >
                        <img
                          src={meh}
                          alt="Meh emoji"
                          onClick={() => this.sendMeh(sleep.id)}
                        />
                      </div>
                      <div
                        className={
                          this.state.active === 3
                            ? "emoji happy active-emoji"
                            : "emoji happy"
                        }
                      >
                        <img
                          src={happy}
                          alt="Happy emoji"
                          onClick={() => this.sendHappy(sleep.id)}
                        />
                      </div>
                      <div
                        className={
                          this.state.active === 4
                            ? "emoji excited active-emoji"
                            : "emoji excited"
                        }
                      >
                        <img
                          src={excited}
                          alt="Excited emoji"
                          onClick={() => this.sendExcited(sleep.id)}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                )}
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
  { sleep, fetchSleepData, deleteSleepTime, wakingUp, sendEmoji }
)(Dashboard);

// {this.props.sleepData.map(sleep => [
//   <span key={Math.random()}>{sleep.timeInBed}</span>,
//   <button onClick={() => this.deleteTime(sleep.id)}>X</button>,
//   <button onClick={() => this.wakeUp(sleep.id)}>Wake Up</button>
// ])}
