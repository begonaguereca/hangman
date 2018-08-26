import React from 'react';

class LetterPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedValue: ''
    }
  }
  componentWillUpdate() {
    // console.log('inside componentWillUpdate-----------------');
    // console.log('letter: ', this.props.letter)
    // console.log('guessedLetter: ', this.props.guessedLetter)
    if(this.props.guessedLetter === this.props.letter) {
      this.setState({
        displayedValue: this.props.letter
      });
    }
  }

  render () {
    return (
    <div className="col col-sm-12 letter-placeholder text-left">
      {this.state.displayedValue}
    </div>
  )}
}

export default LetterPlaceholder;
