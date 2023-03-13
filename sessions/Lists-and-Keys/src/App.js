import UserProfile from './Components/UserProfile'

import './App.css'

const userDetails = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'YSR Asara',
    role: 'YSR',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'YSR Asara',
    role: 'YSR',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'YSR Asara',
    role: 'YSR',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'YSR Asara',
    role: 'YSR',
  },
]

const App = () => (
  <div className="app-container">
    <div className="nav">
      <div className="nav-bar">
        <h1 className="heading">Beneficiary Outreach</h1>
        <p className="description">Home</p>
      </div>
    </div>
    <div className="container">
      <h1 className="title">list</h1>
      <ul>
        {userDetails.map(eachItem => (
          <UserProfile userDetails={eachItem} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
