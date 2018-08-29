import React from 'react';
import Hint from './Hint.jsx';

class ScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="score-page">
        <div className='row'>
          <div className="col-12">
            <div className="character">
              <div>{this.props.username}</div>
              <div className="character-img"></div>
            </div>
            <div className="missed-letters">{this.props.missedLetters} Missed Letters</div>
            <div className="total-points">{this.props.score} Total Points</div>
          </div>
        </div>

        <div className='row'>
          <div className="col-12">
            <div className="hints-box">
              <Hint hints={this.props.hints} word={this.props.word} decrementPoints ={this.props.decrementPoints} />
            </div>
          </div>
        </div>
      </div>
    )}
  }


export default ScorePage;
