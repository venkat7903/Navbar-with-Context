// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundClassName = isDarkTheme
        ? 'dark-container'
        : 'light-container'

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
