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
      missedLetters: 0,
      correctLetters: 0
    }
    this.updateNewGuessedLetter = this.updateNewGuessedLetter.bind(this);
  }

  updateNewGuessedLetter(letter) {
    if(this.props.word.split('').indexOf(letter) === -1) {
      if(this.state.missedLetters < 6) {
        this.setState((prevState) => {
          return {missedLetters: prevState.missedLetters + 1}
        });
      }
    } else {
      console.log('mult letters', this.props.uniqueCount)
      this.setState((prevState) => {
        return {correctLetters: prevState.correctLetters + this.props.uniqueCount[letter]}
      });
    }

    this.setState({
      guessedLetter: letter
    },() => this.forceUpdate());
  }

  componentDidUpdate(prevProps) {
    if (this.props.word !== prevProps.word) {
      this.setState({missedLetters: 0});
    }
  }

  render () {
    console.log(this.props.word, this.state.correctLetters === this.props.word.split('').length, this.state.correctLetters, this.props.word.split('').length)
    let alert = null;

    if(this.state.missedLetters === 6) {
      alert = <div className="alert alert-danger" role="alert">
                You Lose!
              </div>
      }

    if( this.state.correctLetters !== 0 && (this.state.correctLetters === this.props.word.split('').length) && this.state.missedLetters < 6) {
      alert = <div className="alert alert-success" role="alert">
                You Win!
              </div>
      }
    return (
      <div className="hangman-main-page">
        {alert}
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
            <Scorekeeping missedLetters={this.state.missedLetters} word={this.props.word}/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <BoxesLetters word={this.props.word} updateLetter={this.updateNewGuessedLetter} alphabet={this.props.alphabet}/>
          </div>
        </div>
      </div>
    )}
  }


export default Hangman;
