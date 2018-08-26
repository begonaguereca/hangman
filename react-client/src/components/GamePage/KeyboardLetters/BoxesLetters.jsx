import React from 'react';
import Letter from './Letter.jsx';

const BoxesLetters = (props) => {
  return (
    <div className="row">
      { props.alphabet.map((letter, i) => <Letter letter={letter} updateLetter={props.updateLetter} key={i}/>)}
    </div>
  )
}

export default BoxesLetters;
