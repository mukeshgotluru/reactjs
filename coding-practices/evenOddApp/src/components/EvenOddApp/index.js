// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const random = Math.random() * 100
    const round = Math.ceil(random)
    this.setState(prevState => ({count: prevState.count + round}))
    console.log(round)
    console.log(random)
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <h1 className="heading">Count {count}</h1>
        <p className="description">Count is {displayText}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
