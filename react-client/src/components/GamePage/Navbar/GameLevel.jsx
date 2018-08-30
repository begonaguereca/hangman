import React from 'react';
import $ from 'jquery';

class GameLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({level: event.target.value});
  }

  handleClick() {
    this.props.updateDifficulty(this.state.level);
  }

  render () {
    return (
      <li className="nav-item level-selection">
        <form onSubmit={this.handleSubmit} className="custom-dropdown ">
          <label>
            Challenge Level:
              <select onChange={this.handleChange} label="text">
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
          <button className="btn btn-sm btn-outline-secondary new-word-button" type="button" onClick={this.handleClick}>New Word</button>
        </form>
      </li>
  )}
}

export default GameLevel;
