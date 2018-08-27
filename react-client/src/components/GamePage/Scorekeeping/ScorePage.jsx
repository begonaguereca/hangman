import React from 'react';
import Astronaut from './Astronaut.jsx';


class ScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
      <div className="score-page">
        <div className="character">Your Character</div>
        {/* <Astronaut /> */}
        {/* <img src="./img/astronaut" alt="Astronaut"/> */}
        <div className="missed-letters">{this.props.missedLetters} Missed Letters</div>
        <div className="total-points">0 Total Points</div>
      </div>
    )}
  }


export default ScorePage;
