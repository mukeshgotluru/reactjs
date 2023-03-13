import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    imageUrl: 'name',
    name: 'YSR',
  },
  {
    imageUrl: 'name',
    name: 'YSR',
  },
  {
    imageUrl: 'name',
    name: 'YSR',
  },
  {
    imageUrl: 'name',
    name: 'YSR',
  },
]
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="navbar">
          <img
            src="https://media.glassdoor.com/sqll/871374/ap-state-government-squarelogo-1475070655809.png"
            alt="logo"
            className="logo"
          />
          <div>
            <h1 className="outreach">Beneficiary Outreach</h1>
            <p className="description">Home</p>
          </div>
        </div>
        <h1 className="title">Users List</h1>
        <ul className="list-container">
          {userDetailsList.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
