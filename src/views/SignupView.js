import React from "react";
import "../styles/Form.css";

class LoginView extends React.Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form col s12">
        <h3>Sign Up:</h3>
        <div className="input-field col s6">
          <input id="first-name" type="text" />
          <label for="first-name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last-name" type="text" />
          <label for="last-name">Last Name</label>
        </div>
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
