// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutContainerClassName = isDarkTheme
        ? 'dark-container'
        : 'light-container'
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutContainerClassName}`}>
            <img src={aboutImg} alt="about" className="home-img" />
            <h1 className="home-title">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
