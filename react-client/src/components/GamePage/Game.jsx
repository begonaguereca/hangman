import React from 'react';
import LettersToGuess from './LettersToGuess/LettersToGuess.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="hangman-img">TODO: make Hangman annimation</div>
        </div>
      </div>

    <div className="row">
      <div className="col-sm-9">
        <div className="letters-guessed">
          <LettersToGuess word={this.props.word} guessedLetter={this.props.guessedLetter}/>
        </div>
      </div>
    </div>
   </div>
  )}
}

export default Game;
