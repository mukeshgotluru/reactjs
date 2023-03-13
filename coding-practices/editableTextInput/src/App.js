import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    TextElement: '',
    onClickButtonCheck: false,
  }

  onChangeUserInput = event => {
    this.setState({TextElement: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      onClickButtonCheck: !prevState.onClickButtonCheck,
    }))
  }

  render() {
    const {TextElement, onClickButtonCheck} = this.state
    const BtnText = onClickButtonCheck ? 'Edit' : 'Save'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <input
            type="text"
            value={TextElement}
            onChange={this.onChangeUserInput}
          />
          <p className="input-text">{TextElement}</p>
          <button className="btn-style" onClick={this.onClickBtn} type="button">
            {BtnText}
          </button>
        </div>
      </div>
    )
  }
}

export default App
