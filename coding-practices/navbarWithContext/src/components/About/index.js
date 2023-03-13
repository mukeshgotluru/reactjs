// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isDark = isDarkTheme ? 'dark' : 'light'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <NavBar />
          <div className={`about-container ${isDark}`}>
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className="about-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
