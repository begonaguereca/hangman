  /*
  1. I dont like that i split the array every time a letter is guessed
  */

import React from 'react';
import NavBar from './Navbar/NavBar.jsx';
import Keyboard from './Keyboard/BoxesLetters.jsx';
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
      correctLetters: 0,
      alert: null
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
      this.setState((prevState) => {
        return {correctLetters: prevState.correctLetters + this.props.uniqueCount[letter]}
      });

      //Game is won
      if(this.state.correctLetters !== 0 && (this.state.correctLetters + 1 === this.props.word.split('').length) && this.state.missedLetters < 6) {
        this.props.updateRoundOver();
        this.props.incrementPoints();
      }
    }
    this.setState({guessedLetter: letter});
  }

  componentDidUpdate(prevProps) {
    if (this.props.word !== prevProps.word) {
      this.setState({missedLetters: 0});
      this.setState({correctLetters: 0});
      this.setState({alert: null});
    }
  }

  render () {
    console.log(this.props.word);
    let alert = this.state.alert;

    if(this.state.missedLetters === 6 && !this.state.roundOver) {
      alert = <div className="alert alert-danger" role="alert">
                Oh no! You gussed too many incorrect letters, the word was {this.props.word}
              </div>
      }

    if(!this.state.roundOver && this.state.correctLetters !== 0 && (this.state.correctLetters === this.props.word.split('').length) && this.state.missedLetters < 6) {
      alert = <div className="alert alert-success" role="alert">
                Great job! You gussed the word! Keep trying harder levels
              </div>

    }
    return (
      <div className="hangman-main-page">
      {alert}
        <div className="row">
          <div className="col-12">
            <NavBar updateDifficulty={this.props.updateDifficulty}
                    updateUsername={this.props.updateUsername}
                    resetScore={this.props.resetScore}
                    getTopScoringPlayers={this.props.getTopScoringPlayers}
                  />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <Game guessedLetter={this.state.guessedLetter}
                  word={this.props.word}
                  missed={this.state.missedLetters}
                />
          </div>
          <div className="col-4">
            <Scorekeeping username={this.props.username}
                          score={this.props.score}
                          hints={this.props.hints}
                          missedLetters={this.state.missedLetters}
                          word={this.props.word}
                          decrementPoints ={this.props.decrementPoints}
                          updateDifficulty={this.props.updateDifficulty}
                        />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Keyboard word={this.props.word}
                      updateLetter={this.updateNewGuessedLetter}
                      roundOver={this.props.roundOver}
                      alphabet={this.props.alphabet}/>
          </div>
        </div>
      </div>
    )}
  }

export default Hangman;
