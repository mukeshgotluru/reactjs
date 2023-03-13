// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isDark = isDarkTheme ? 'dark' : 'light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <NavBar />
          <div className={`home-container ${isDark}`}>
            <img src={homeImageUrl} alt="home" className="home-image" />
            <h1 className="home-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
