import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import GameLevel from './GameLevel.jsx';
import GameRules from './GameRules.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateDifficulty(1);
    this.props.updateUsername('');
    this.props.resetScore();
    this.props.getTopScoringPlayers();
  }

  render () {
    return (
    <div className="navbar-outline">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Space Hangman</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <GameRules />
            <GameLevel updateDifficulty={this.props.updateDifficulty} />
          </ul>

          <Link to='/Leaders'>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.handleClick}>Game Over</button>
            </form>
          </Link>
        </div>
      </nav>
    </div>
  )}
}

export default NavBar;
