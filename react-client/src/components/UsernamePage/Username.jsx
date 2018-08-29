import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateUsername(this.state.username)
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  render () {
    return (
      <div className="username-main-page">
        <div className="row">
          <div className="col-12">
            <h1 className="username-header text-center"><b>Type in Your Username</b></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
          <div className="input-group input-group-lg">
            <input value={this.state.username} onChange={this.handleChange} type="text" placeholder="Username" className="form-control username-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Link to='/Hangman'>
              <div className="username-button-container text-center">
                <button type="button" onClick={this.handleClick} className="h-button">Lets Play!</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )}
  }

  export default Username;
