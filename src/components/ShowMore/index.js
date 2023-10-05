import {Component} from 'react'

import ContentDisplay from '../ContentDisplay'

import CreateContext from '../../Context/CreateContext'

import './index.css'

class showMore extends Component {
  renderApplicationImageContainer = () => (
    <CreateContext.Consumer>
      {value => {
        const {showImg, toggleImg} = value

        const onClickAddImg = () => {
          toggleImg()
        }

        return (
          <div>
            {showImg ? (
              <button
                type="button"
                className="show-more-btn"
                onClick={onClickAddImg}
              >
                Show More
              </button>
            ) : (
              <div className="content-display-container">
                <ContentDisplay />
              </div>
            )}
          </div>
        )
      }}
    </CreateContext.Consumer>
  )

  render() {
    return (
      <>
        <div className="total-home">
          <div>{this.renderApplicationImageContainer()}</div>
        </div>
      </>
    )
  }
}

export default showMore
