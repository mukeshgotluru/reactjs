import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitSuccess = jWtToken => {
    Cookies.set('jwt_token', jWtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="userName">
          USERNAME
        </label>
        <input
          type="text"
          className="input-field"
          id="userName"
          onChange={this.onChangeUserName}
          value={username}
          placeholder=" Username"
        />
      </>
    )
  }

  renderUserPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="text"
          className="input-field"
          id="password"
          onChange={this.onChangePassword}
          value={password}
          placeholder=" Password"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1 className="title">NETFLIX</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderUserPassword()}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default Login
