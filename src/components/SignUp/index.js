import { Component } from "react";
import { Audio } from "react-loader-spinner";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import Header from "../Header";

import "./index.css";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    phn:""
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="PASSWORD"
        />
      </>
    );
  };

  renderPhoneField = () => {
    const { phn } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PHONE NUMBER
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={phn}
          onChange={this.onChangePhone}
          placeholder="PASSWORD"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="USERNAME"
        />
      </>
    );
  };

  onClickSignUp = () => {
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />;
    const { history } = this.props;
    history.replace("/");
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <Header />
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className="input-container">{this.renderhoneField()}</div>
            <button type="submit" className="login-button">
              SIGN UP
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <p>
             Already have an acount?{" "}
              <span onClick={this.onClickSignUp} className="sign-up">
                Log in
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
