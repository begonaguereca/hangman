import React from 'react';
import Hangman from '../GamePage/HangmanPage.jsx';
import Alien from './Alien.jsx'
import {Link} from 'react-router-dom';
import {Animated} from "react-animated-css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
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
          <div className="homepage-header">
            <Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={true}>
              <div className="homepage-header-container">
                <h1> SPACE HANGMAN</h1>
              </div>
            </Animated>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Link to='/Hangman'>
            <div className="homepage-button-container">
              <button type="button" className="h-button">Start Adventure</button>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )}
}

export default HomePage;
