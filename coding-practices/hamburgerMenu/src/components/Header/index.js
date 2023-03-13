// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <Link className="nav-link" to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div>
      <Popup
        modal="true"
        trigger={
          <button
            className="close-button"
            type="button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              testid="closeButton"
            >
              <IoMdClose className="close" />
            </button>
            <ul>
              <li className="icons">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  testid="closeButton"
                >
                  <Link className="nav-link" to="/">
                    <AiFillHome className="icon" />
                    <h1 className="name">Home</h1>
                  </Link>
                </button>
              </li>
              <li className="icons">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  testid="closeButton"
                >
                  <Link className="nav-link" to="/about">
                    <BsInfoCircleFill className="icon" />
                    <h1 className="name">About</h1>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
