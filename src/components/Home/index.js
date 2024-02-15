// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeContainerClassName = isDarkTheme
        ? 'dark-container'
        : 'light-container'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeContainerClassName}`}>
            <img src={homeImg} alt="home" className="home-img" />
            <h1 className="home-title">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
