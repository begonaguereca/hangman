import React from 'react';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    this.setState({
      clicked: true
    });

    this.props.updateLetter(this.props.letter);
  }

  render () {
    return (
    <div className="col letter-buttons">
      <button type="button" className="btn btn-primary" onClick={this.handleClick} disabled={this.state.clicked}>{ this.props.letter }</button>
    </div>
  )}
}

export default Letter;
