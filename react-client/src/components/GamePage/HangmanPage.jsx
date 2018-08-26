  /*
  1. I dont like that i split the array every time a letter is guessed
  2. The force update is in an infinate loop
  */

import React from 'react';
import NavBar from './NavBar.jsx';
import BoxesLetters from './KeyboardLetters/BoxesLetters.jsx';
import Scorekeeping from './Scorekeeping/ScorePage.jsx';
import Game from './Game.jsx';
import $ from 'jquery';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedLetter: '',
      wordArray: this.props.word.split(''),
      missedLetters: 0
    }
    this.updateNewGuessedLetter = this.updateNewGuessedLetter.bind(this);
  }

  updateNewGuessedLetter(letter) {
    if(this.props.word.split('').indexOf(letter) === -1) {
      if(this.state.missedLetters === 6) {
        $().alert();
      } else {
        this.setState({
          missedLetters: this.state.missedLetters + 1
        });
      }
    }
    this.setState({
      guessedLetter: letter
    },() => this.forceUpdate());
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <NavBar updateDifficulty={this.props.updateDifficulty}/>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <Game guessedLetter={this.state.guessedLetter} word={this.props.word}/>
          </div>
          <div className="col-4">
            <Scorekeeping missedLetters={this.state.missedLetters}/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <BoxesLetters updateLetter={this.updateNewGuessedLetter} alphabet={this.props.alphabet}/>
          </div>
        </div>
      </div>
    )}
  }


export default Hangman;
