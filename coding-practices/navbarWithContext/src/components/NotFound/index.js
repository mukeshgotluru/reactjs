// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isDark = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={isDark}>
          <NavBar />
          <div className={`not-found-container ${isDark}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading">Lost Your way?</h1>
            <p className="paragraph">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
