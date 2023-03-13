// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const color = isDarkTheme ? 'dark' : 'light'

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const onClickTheme = () => {
        toggleTheme()
      }
      return (
        <div className={`nav-bar ${color}`}>
          <img src={logoUrl} alt="website logo" className="logo" />
          <ul className={`list ${color}`}>
            <Link to="/" className={`link ${color}`}>
              <li className={`link ${color}`}>Home</li>
            </Link>
            <Link to="/about" className={`link ${color}`}>
              <li className={`link ${color}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            onClick={onClickTheme}
            data-testid="theme"
          >
            <img src={imageUrl} alt="theme" className="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
