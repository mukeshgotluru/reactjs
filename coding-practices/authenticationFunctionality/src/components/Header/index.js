// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'
import LogoutButton from '../LogoutButton'

const Header = () => (
  <>
    <div className="nav-container">
      <h1 className="logo">M</h1>
      <ul className="nav-bar">
        <Link to="/">
          <li className="link">Home</li>
        </Link>
        <Link to="/about">
          <li className="link">About</li>
        </Link>
      </ul>
      <LogoutButton />
    </div>
  </>
)
export default Header
