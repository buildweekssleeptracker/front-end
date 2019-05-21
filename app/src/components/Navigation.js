import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "../styles/Navigation.css";

const Navigation = props => {
  const logOut = () => {
    localStorage.removeItem("userToken");
    props.history.push("/");
  };


  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-4">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul className="right hide-on-med-and-down ">

          {localStorage.getItem("userToken") ? (
            <React.Fragment>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link onClick={logOut}>Log Out</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </React.Fragment>
          )}

        </ul>
      </div>
    </nav>
  );
};


const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);

