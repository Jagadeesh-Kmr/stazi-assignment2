// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import CreateContext from '../../Context/CreateContext'

import './index.css'

class Header extends Component {
  renderHeader = () => (
    <CreateContext.Consumer>
      {value => {
        const {
          nwBtnColor,
          toggleNwBtn,
          mmBtnColor,
          toggleMmBtn,
          prBtnColor,
          togglePrBtn,
        } = value

        const onClickToggleNewYork = () => {
          toggleNwBtn()
        }

        const onClickToggleMumbai = () => {
          toggleMmBtn()
        }

        const onClickToggleParis = () => {
          togglePrBtn()
        }

        const newYorkClassName = nwBtnColor
          ? 'btn-blue-color'
          : 'btn-grey-color'

        const mumbaiClassName = mmBtnColor ? 'btn-blue-color' : 'btn-grey-color'

        const parisClassName = prBtnColor ? 'btn-blue-color' : 'btn-grey-color'

        return (
          <nav className="header-container">
            <ul className="nav-items-list">
              <button
                type="button"
                className={`header-btn ${newYorkClassName}`}
                onClick={onClickToggleNewYork}
              >
                <Link className="route-link" to="/new-york">
                  NewYork
                </Link>
              </button>
              <button
                type="button"
                className={`header-btn ${mumbaiClassName}`}
                onClick={onClickToggleMumbai}
              >
                <Link className="route-link" to="/mumbai">
                  Mumbai
                </Link>
              </button>
              <button
                type="button"
                className={`header-btn ${parisClassName}`}
                onClick={onClickToggleParis}
              >
                <Link className="route-link" to="/paris">
                  Paris
                </Link>
              </button>
            </ul>
          </nav>
        )
      }}
    </CreateContext.Consumer>
  )

  render() {
    return <>{this.renderHeader()}</>
  }
}

export default Header
