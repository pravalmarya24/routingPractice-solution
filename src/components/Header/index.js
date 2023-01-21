import {Link} from 'react-router-dom'
import './index.css'
// Write your JS code here
const Header = () => (
  <nav className="navBar-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img-size"
      />
      <p className="wave-para">Wave</p>
    </div>
    <div className="nav-menu-container">
      <ul className="nav-unordered-list">
        <li className="list-heading">
          <Link to="/" className="link-list">
            Home
          </Link>
        </li>
        <li className="list-heading">
          <Link to="/about" className="link-list">
            About
          </Link>
        </li>
        <li className="list-heading">
          <Link to="/contact" className="link-list">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
