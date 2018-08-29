import React from 'react';
import Letter from './Letter.jsx';

const BoxesLetters = (props) => {
  return (
    <div className='row top-keyboard'>

      { [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map((letter, i) => {
          return (<Letter letter={letter}
                          missedLetters={props.missedLetters}
                          updateLetter={props.updateLetter}
                          roundOver={props.roundOver}
                          word={props.word}
                          key={i}
                        />)
        })
      }
    </div>
  )}

export default BoxesLetters;
