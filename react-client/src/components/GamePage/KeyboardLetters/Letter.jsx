import React from 'react';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      currentWord: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: true});
    this.props.updateLetter(this.props.letter);
  }

  componentDidUpdate(prevProps) {
    if (this.props.word !== prevProps.word) {
      this.setState({clicked: false});
    }
  }

  render () {
    return (
    <div className="col letter-buttons">
      <button type="button" className="btn btn-warning" onClick={this.handleClick} disabled={this.state.clicked}>{ this.props.letter }</button>
    </div>
  )}
}

export default Letter;
