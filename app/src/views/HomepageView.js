import React from "react";
import { Link } from "react-router-dom";


import "../styles/Homepage.css";
import sleepingMan from "../assets/sleeping_man_pic.jpg";
import restlessMan from "../assets/restless_man.jpg";
import LoginView from "./LoginView";

const HomepageView = () => {
  return (
    <div className="cards-container">
      <div className="card large sticky-action ">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={sleepingMan} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Already using Sleep Tracker to get quality sleep?
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link
              to={localStorage.getItem("userToken") ? "/dashboard" : "/login"}
            >
              Log In!
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-3">
            Quality Sleep{" "}
            <span role="img" aria-label="emoji">
              💤
            </span>
            <i className="material-icons right">close</i>
          </span>
          <p>
            You already use the app, so what're looking around for?! Log in and
            get to sleep!
          </p>
        </div>
      </div>

      <div className="card large sticky-action ">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={restlessMan} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-3">
            Restless Insomniac?
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link
              to={localStorage.getItem("userToken") ? "/dashboard" : "/signup"}
            >
              Sign Up!
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Our app works!<i className="material-icons right">close</i>
          </span>
          <p>
            Trust us when we tell you this app will get you the good night rest
            you need! Go and sign up now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageView;

{
  /* <div className="cards-container">
<div className="card large sticky-action ">
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={sleepingMan} />
  </div>
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">
      Already using Sleep Tracker to get quality sleep?
      <i className="material-icons right">more_vert</i>
    </span>
    <p>
      <Link to="/login">Log In!</Link>
    </p>
  </div>
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-3">
      Quality Sleep{" "}
      <span role="img" aria-label="emoji">
        💤
      </span>
      <i className="material-icons right">close</i>
    </span>
    <p>
      You already use the app, so what're looking around for?! Log in and
      get to sleep!
    </p>
  </div>
</div>

<div className="card large sticky-action ">
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={restlessMan} />
  </div>
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-3">
      Restless Insomniac?<i className="material-icons right">more_vert</i>
    </span>
    <p>
      <Link to="/signup">Sign Up!</Link>
    </p>
  </div>
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">
      Our app works!<i className="material-icons right">close</i>
    </span>
    <p>
      Trust us when we tell you this app will get you the good night rest
      you need! Go and sign up now!
    </p>
  </div>
</div>
</div> */
}

