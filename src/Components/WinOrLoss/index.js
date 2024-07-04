import './index.css'

const WinOrLoss = props => {
  const {score, playAgain} = props
  const playAgainNow = () => {
    playAgain()
  }
  return (
    <div className="tropy-container">
      <div className="tropy-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="tropy"
        />
        <p className="score-message">YOUR SCORE</p>
        <h1 className="score">{score}</h1>
        <button className="play-again" onClick={playAgainNow} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default WinOrLoss
