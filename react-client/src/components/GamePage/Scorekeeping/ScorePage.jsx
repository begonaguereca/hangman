import React from 'react';


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
        <div className="missed-letters">{this.props.missedLetters} Missed Letters</div>
      </div>
    )}
  }


export default ScorePage;
