import React from 'react';

class LetterPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedValue: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.word !== prevProps.word) {
      this.setState({displayedValue: ''});
    }

    if (this.props.guessedLetter !== prevProps.guessedLetter) {
      if(this.props.guessedLetter === this.props.letter) {
        this.setState({
          displayedValue: this.props.letter
        });
      }
    }
  }

  render () {
    return (
    <div className="col col-sm-12 letter-placeholder text-center">
      {this.state.displayedValue}
    </div>
  )}
}

export default LetterPlaceholder;
