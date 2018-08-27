/*
1. Need to work ok kinks for the toggle down for the Game Rules
2. Need to work out the Game Rules section
*/
import React from 'react';
import $ from 'jquery';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.props.updateDifficulty(event.target.value);
  }

  handleClick() {
    console.log('inside click')
    this.props.updateDifficulty();
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
            <li className="nav-item active">
              <a className="nav-link" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus." aria-expanded="false" aria-controls="collapseExample">Game Rules <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item level-selection">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Challenge Level:
                  <select onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
              </form>
            </li>

          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.handleClick}>New Game</button>
          </form>

        </div>
      </nav>
    </div>
  )}
}

export default NavBar;
