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
        <div className="character">
          <div>Your Character</div>
          <div className="character-img"></div>
        </div>
        <div className="missed-letters">{this.props.missedLetters} Missed Letters</div>
        <div className="total-points">0 Total Points</div>
      </div>
    )}
  }


export default ScorePage;
