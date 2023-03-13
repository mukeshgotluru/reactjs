// import {Component} from "react"

import './index.css'

const Header = props => {
  const {timer} = props
  const {time} = timer
  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-container">
        <p className="score">Score:0</p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timer"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
