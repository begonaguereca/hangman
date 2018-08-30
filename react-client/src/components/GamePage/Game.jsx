import React from 'react';
import Placeholder from './LettersToGuess/LettersToGuess.jsx';
import Alien from './AlienHanged/Alien.jsx';

const Game = (props) => {
    return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="hangman-img">
            <Alien missed={props.missed}/>
          </div>
        </div>
      </div>

    <div className="row">
      <div className="col-9 col-sm-9">
        <div className="letters-guessed">
          <Placeholder word={props.word} guessedLetter={props.guessedLetter} word={props.word}/>
        </div>
      </div>
    </div>
   </div>
  )
};

export default Game;
