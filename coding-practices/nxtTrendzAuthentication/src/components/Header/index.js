// Write your JS code here
import './index.css'

const Header = () => (
  <div className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <div className="nav-items">
      <li className="link">Home</li>
      <li className="link">About</li>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </div>
)
export default Header
