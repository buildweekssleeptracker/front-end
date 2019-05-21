import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 title">
            {this.props.user.username}'s sleep data
          </div>
          <div className="col s6 subtitle">Testing Materialize</div>
          <div className="col s6 subtitle">Testing Materialize</div>
        </div>

        <div className="row">
          <Link
            to="/"
            className="waves-effect waves-light btn col s8 offset-s2"
          >
            New Sleep Session <i className="material-icons right">cloud</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  {}
)(Dashboard);
