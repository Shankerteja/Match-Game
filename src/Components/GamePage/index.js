import {Component} from 'react'

import ImageTabs from '../ImageTabs'

import ImageItem from '../ImageItem'

import WinOrLoss from '../WinOrLoss'
import './index.css'

class GamePage extends Component {
  state = {
    activetab: 'FRUIT',
    initiatialtime: 60,
    randomNum: 0,
    score: 0,
    finishGame: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  pressTheImage = id => {
    const {imagesList} = this.props
    const {finishGame, randomNum, initiatialtime} = this.state
    const matched = imagesList[randomNum].id === id && initiatialtime > 0
    if (imagesList[randomNum].id !== id) {
      clearInterval(this.intervalId)
    }

    if (!matched) {
      this.setState({
        finishGame: !finishGame,
      })
    } else {
      const randomNumber = Math.ceil(Math.random() * (imagesList.length - 1))
      this.setState(prevState => ({
        randomNum: randomNumber,
        score: prevState.score + 1,
      }))
    }
  }

  imagesContainer = () => {
    const {activetab} = this.state
    const {imagesList} = this.props
    const filteredlist = imagesList.filter(
      eachImage => eachImage.category === activetab,
    )
    return (
      <ul className="images-container">
        {filteredlist.map(eachImage => (
          <ImageItem
            eachImage={eachImage}
            key={eachImage.id}
            pressTheImage={this.pressTheImage}
          />
        ))}
      </ul>
    )
  }

  decreseTimeBySecond = () => {
    const {initiatialtime} = this.state
    if (initiatialtime <= 0) {
      this.setState({finishGame: true})
    } else {
      this.setState({initiatialtime: initiatialtime - 1})
    }
  }

  componentDidMount = () => {
    this.intervalId = setInterval(this.decreseTimeBySecond, 1000)
  }

  playagainman = () => {
    this.intervalId = setInterval(this.decreseTimeBySecond, 1000)
  }

  clickTheImage = tabId => {
    this.setState({activetab: tabId})
  }

  playAgain = () => {
    const {finishGame} = this.state
    this.setState({score: 0, finishGame: !finishGame, initiatialtime: 60})
    clearInterval(this.intervalId)
    this.playagainman()
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activetab, initiatialtime, randomNum, score, finishGame} = this.state
    return (
      <div className="app-container">
        <ul className="header-container">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="app-logo"
            />
          </li>
          <li className="score-container">
            <p className="score-para ">
              Score: <span className="score a">{score}</span>
            </p>
            <div className="time-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="time a">{initiatialtime} Sec</p>
            </div>
          </li>
        </ul>
        {finishGame ? (
          <WinOrLoss score={score} playAgain={this.playAgain} />
        ) : (
          <div className="image-control-container">
            <img
              src={imagesList[randomNum].imageUrl}
              className="random-image"
              alt="match"
            />

            <ul className="tab-list">
              {tabsList.map(eachTab => (
                <ImageTabs
                  eachTab={eachTab}
                  key={eachTab.tabId}
                  clickTheImage={this.clickTheImage}
                  ActivetabId={activetab === eachTab.tabId}
                />
              ))}
            </ul>

            {this.imagesContainer()}
          </div>
        )}
      </div>
    )
  }
}
export default GamePage
