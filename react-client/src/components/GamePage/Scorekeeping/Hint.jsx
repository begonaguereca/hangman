import React from 'react';
import HintOne from './Hint1.jsx';
import HintTwo from './Hint2.jsx';

const Hint = (props) => {
  return (
    <div className="btn-hint-group row">
      <HintOne hints={props.hints} word={props.word} decrementPoints ={props.decrementPoints}  />
      <HintTwo hints={props.hints} word={props.word} decrementPoints ={props.decrementPoints} />
    </div>
)};

export default Hint;
