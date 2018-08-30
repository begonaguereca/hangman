import React from 'react';
import {Animated} from "react-animated-css";

const AlienThree = (props) => {
  return (
    <Animated animationIn="wobble" isVisible={true}>
      <div className="monster">
        <div className="body">
          <div className="vampi-mouth">
            <div className="vampi-tooth"></div>
          </div>
        </div>
        <div className="eye-lid">
          <div className="eyes">
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </Animated>
)};

export default AlienThree;
