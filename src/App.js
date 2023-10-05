import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import CreateContext from './Context/CreateContext'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

import ShowMore from './components/ShowMore'

import './App.css'

class App extends Component {
  state = {
    showImg: true,
    nwBtnColor: true,
    mmBtnColor: false,
    prBtnColor: false,
  }

  toggleImg = () => {
    this.setState(prevState => ({showImg: !prevState.showImg}))
  }

  toggleNwBtn = () => {
    this.setState(prevState => ({
      nwBtnColor: !prevState.nwBtnColor,
      mmBtnColor: false,
      prBtnColor: false,
    }))
  }

  toggleMmBtn = () => {
    this.setState(prevState => ({
      mmBtnColor: !prevState.mmBtnColor,
      prBtnColor: false,
      nwBtnColor: false,
    }))
  }

  togglePrBtn = () => {
    this.setState(prevState => ({
      prBtnColor: !prevState.prBtnColor,
      nwBtnColor: false,
      mmBtnColor: false,
    }))
  }

  render() {
    const {showImg, nwBtnColor, mmBtnColor, prBtnColor} = this.state
    return (
      <CreateContext.Provider
        value={{
          showImg,
          toggleImg: this.toggleImg,
          nwBtnColor,
          toggleNwBtn: this.toggleNwBtn,
          mmBtnColor,
          toggleMmBtn: this.toggleMmBtn,
          prBtnColor,
          togglePrBtn: this.togglePrBtn,
        }}
      >
        <>
          <div className="app-container">
            <div className="main-container">
              <div>
                <h1 className="app-hd">Featured Listed Property</h1>
                <p className="app-desc">
                  Real estate can be bought, solid,leased, or rented, and can be
                  valuable investment opportunity. the value of real estate can
                  be...
                </p>
              </div>
              <div className="responsive-container">
                <Header />
                <div className="app-body">
                  <Switch>
                    <Route exact path="/new-york" component={Home} />
                    <Route exact path="/mumbai" component={About} />
                    <Route exact path="/paris" component={Contact} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <div className="show-more">
            <ShowMore />
          </div>
        </>
      </CreateContext.Provider>
    )
  }
}

export default App
