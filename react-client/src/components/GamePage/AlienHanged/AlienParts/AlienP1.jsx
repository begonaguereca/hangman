import React from 'react';
import {Animated} from "react-animated-css";

const AlienOne = (props) => {
  return (
  <Animated animationIn="wobble" isVisible={true}>
    <div className="monster">
      <div className="eye-lid">
        <div className="eyes">
          <div className="eye"></div>
        </div>
      </div>
    </div>
  </Animated>
)};

export default AlienOne;
