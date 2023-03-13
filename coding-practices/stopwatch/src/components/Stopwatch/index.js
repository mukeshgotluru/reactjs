// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onStopBTn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="img-timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="btn-container">
              <button
                className="button start-btn"
                type="button"
                onClick={this.onStartBtn}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button stop-btn"
                type="button"
                onClick={this.onStopBTn}
              >
                Stop
              </button>
              <button
                className="button reset-btn"
                type="button"
                onClick={this.onResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch