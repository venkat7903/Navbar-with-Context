// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const webLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navClassName = isDarkTheme ? 'nav-dark' : 'nav-light'

      const navLink = isDarkTheme ? 'nav-dark-link' : 'nav-light-link'

      const onClickThemeBtn = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-container ${navClassName}`}>
          <div className="sub-nav-container">
            <img src={webLogo} alt="website logo" className="web-logo" />
            <ul className="nav-links">
              <li>
                <Link to="/" className={`nav-link ${navLink}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${navLink}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              className="dark-light-btn"
              onClick={onClickThemeBtn}
            >
              <img src={theme} alt="theme" className="light-dark-img" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
