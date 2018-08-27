import React from 'react';
import Letter from './Letter.jsx';

const BoxesLetters = (props) => {
  return (
    <div>
      <div className='row top-keyboard'>
        { props.alphabet.map((letter, i) => {
          if(i <= 13) {
            return (
              <Letter letter={letter} updateLetter={props.updateLetter} key={i}/>
            )
          };
        })
        }
      </div>
      <div className='row bottom-keyboard'>
        { props.alphabet.map((letter, i) => {
          if(i >= 13) {
            return (
              <Letter letter={letter} updateLetter={props.updateLetter} key={i}/>
            )
          };
        })
        }
      </div>
    </div>
  )
}

export default BoxesLetters;
