import React from "react";
import { connect } from "react-redux";

import { signup } from "../actions";

import "../styles/Form.css";

class SignupView extends React.Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.credentials).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form col s12">
        <h3>Sign Up:</h3>
        <div className="input-field col s6">
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={this.state.credentials.firstName}
            onChange={this.handleChanges}
          />
          <label htmlFor="first-name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input
            id="last-name"
            name="lastName"
            type="text"
            value={this.state.credentials.lastName}
            onChange={this.handleChanges}
          />
          <label htmlFor="last-name">Last Name</label>
        </div>
        <div className="input-field">
          <input
            id="username"
            name="username"
            type="text"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    signingUp: state.signingUp
  };
};

export default connect(
  mapStateToProps,
  { signup }
)(SignupView);
