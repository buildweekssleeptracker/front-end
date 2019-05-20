import React from "react";
import "../styles/LoginView.css";

class LoginView extends React.Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h3>Log In:</h3>
        <div className="input-field">
          <input id="username" type="text" />
          <label for="username">Username</label>
        </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <button className="btn" type="submit">
          Log In
        </button>
      </form>
    );
  }
}

export default LoginView;
