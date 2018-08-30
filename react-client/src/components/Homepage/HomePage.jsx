import React from 'react';
import Alien from './Alien.jsx'
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

const HomePage = (props) => {
  return (
    <div className="hompage-main">
      <div className="row">
        <div className="col-12">
          <div className="alien-container">
            <Alien />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Animated className="align-middle" animationIn="rubberBand" animationOut="fadeOut" isVisible={true}>
            <div className="homepage-header-container">
              <h1 className="text-center">SPACE HANGMAN</h1>
            </div>
          </Animated>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Link to='/Username'>
            <div className="homepage-button-container">
              <button type="button" className="h-button">Start Adventure</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
)};

export default HomePage;
