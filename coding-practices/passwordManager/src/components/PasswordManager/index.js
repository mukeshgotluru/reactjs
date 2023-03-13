import { Component } from "react";
import { v4 } from "uuid";

import PasswordItem from "../PasswordItem/index";

import "./App.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class PasswordManager extends Component {
  state = {
    websiteInput: "",
    usernameInput: "",
    passwordInput: "",
    searchInput: "",
    isChecked: false,
    passwordsList: [],
  };

  deletePassword = (passwordId) => {
    const { passwordsList } = this.state;

    this.setState({
      passwordsList: passwordsList.filter(
        (password) => password.id !== passwordId
      ),
    });
  };

  renderPasswordsList = () => {
    const { passwordsList, searchInput } = this.state;
    const searchResults = passwordsList.filter((each) =>
      each.username.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchResults.map((eachPassword) => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        toggleIsChecked={this.toggleIsChecked}
        deletePassword={this.deletePassword}
      />
    ));
  };

  onAddPassword = (event) => {
    event.preventDefault();
    const { usernameInput, websiteInput, passwordInput } = this.state;
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ]
    }`;

    const newPassword = {
      id: v4(),
      username: usernameInput,
      website: websiteInput,
      password: passwordInput,
      initialClassName: initialBackgroundColorClassName,
    };

    this.setState((prevState) => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      usernameInput: "",
      websiteInput: "",
      passwordInput: "",
      isChecked: true,
    }));
  };

  showPassword = (event) => {
    if (event.target.checked) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  onChangePasswordInput = (event) => {
    this.setState({
      passwordInput: event.target.value,
    });
  };

  onChangeUsernameInput = (event) => {
    this.setState({
      usernameInput: event.target.value,
    });
  };

  onChangeWebsiteInput = (event) => {
    this.setState({
      websiteInput: event.target.value,
    });
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const {
      usernameInput,
      websiteInput,
      passwordInput,
      passwordsList,
      searchInput,
      isChecked,
    } = this.state;

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
        <div className="passwords-container">
          <div className="passwords-inputs">
            <form className="form" onSubmit={this.onAddPassword}>
              <p className="form-description">Add New Password</p>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  className="website-logo"
                  alt="website"
                />
                <input
                  type="text"
                  className="website-input"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  className="username-logo"
                  alt="username"
                />
                <input
                  type="text"
                  className="username-input"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="password-logo"
                  alt="password"
                />
                <input
                  type="text"
                  className="password-input"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>

              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="heading">
              Your Password
              <span className="passwords-count">{passwordsList.length}</span>
            </p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-logo"
                alt="search"
              />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>

          <hr className="line" />

          <div className="checkbox-container">
            <input
              type="checkbox"
              className="check-box"
              id="check"
              value={isChecked}
              onChange={this.showPassword}
            />
            <label htmlFor="check" className="label-password">
              Show Passwords
            </label>
          </div>

          <ul className="passwords-list">{this.renderPasswordsList()}</ul>
        </div>
      </div>
    );
  }
}

export default PasswordManager;
