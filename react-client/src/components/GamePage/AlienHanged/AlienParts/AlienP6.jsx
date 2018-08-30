import React from 'react';
import {Animated} from "react-animated-css";

const AlienSix = (props) => {
  return (
    <Animated animationIn="zoomOutUp" isVisible={true}>
      <div className="monster monster-dead">
        <div className="body">
          <div className="ear"></div>
          <div className="ear"></div>
          <div className="vampi-mouth">
            <div className="vampi-tooth"></div>
          </div>
        </div>
        <div className="eye-lid">
          <div className="eyes">
            <div className="eye"></div>
          </div>
        </div>
        <div className="legs">
          <div className="alien-right-leg"></div>
          <div className="alien-left-leg"></div>
        </div>
      </div>
    </Animated>
)};

export default AlienSix;
