import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

import "../styles/Form.css";

class LoginView extends React.Component {
  state = {
    credentials: {
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

    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h3>Log In:</h3>
        <div className="input-field">
          <input
            name="username"
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn" type="submit">
          Log In
        </button>
        {this.props.error ? (
          <div>
            <p>
              {this.props.error.response.state}{" "}
              {this.props.error.response.data.message}
            </p>
          </div>
        ) : null}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginView);
