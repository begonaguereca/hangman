import React from 'react';
import Hint from './Hint.jsx';

const ScorePage = (props) => {
  return (
    <div className="score-page">
      <div className='row'>
        <div className="col-12">
          <div className="character">
            <div>{props.username}</div>
            <div className="character-img"></div>
          </div>
          <div className="missed-letters">{props.missedLetters} Missed Letters</div>
          <div className="total-points">{props.score} Total Points</div>
        </div>
      </div>

      <div className='row'>
        <div className="col-12">
          <div className="hints-box">
            <Hint hints={props.hints} word={props.word} decrementPoints ={props.decrementPoints} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScorePage;
