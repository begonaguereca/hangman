import React from 'react';
import LetterPlaceholder from './LetterPlaceholder.jsx';

const LettersToGuess = (props) => {
  return (
    <div className="row letters-to-guess">
      { props.word.split('').map((letter, i) => <LetterPlaceholder letter={letter} guessedLetter={props.guessedLetter} key={i}/>) }
    </div>
  )
}

export default LettersToGuess;
