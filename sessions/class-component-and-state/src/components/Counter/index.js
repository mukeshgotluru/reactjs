import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncreament = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecreament = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="increase">{count}</span>{' '}
          times
        </h1>
        <p className="count">Click the button to incerase the count</p>
        <div>
          <button className="button" onClick={this.onIncreament}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
