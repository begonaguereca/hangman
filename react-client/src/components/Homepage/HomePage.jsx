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
    <div>
      <div className="row">
        <div className="col-12">
          <div className="homepage-header">
            <Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={true}>
              <h1> SPACE HANGMAN</h1>
            </Animated>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 homepage-button">
          <Link to='/Hangman'>
            <button type="button" className="h-button">Start Adventure</button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Alien />
        </div>
      </div>
    </div>
  )}
}

export default HomePage;
