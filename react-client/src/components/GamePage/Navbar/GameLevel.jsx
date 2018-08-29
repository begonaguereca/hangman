import React from 'react';
import $ from 'jquery';

class GameLevel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.props.updateDifficulty(event.target.value);
  }

  render () {
    return (
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
  )}
}

export default GameLevel;
