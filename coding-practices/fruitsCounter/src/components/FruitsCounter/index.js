// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{count1} </span> mangoes
            <span className="count"> {count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />

            <button
              type="button"
              className="button"
              onClick={this.onMangoIncrement}
            >
              Eat Mango
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />

            <button
              type="button"
              className="button"
              onClick={this.onBananaIncrement}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
