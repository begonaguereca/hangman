/*add the disabled prop*/
import React from 'react';
import HintOne from './Hint1.jsx';
import HintTwo from './Hint2.jsx';

class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="btn-hint-group row">
        <HintOne hints={this.props.hints} word={this.props.word} decrementPoints ={this.props.decrementPoints}  />
        <HintTwo hints={this.props.hints} word={this.props.word} decrementPoints ={this.props.decrementPoints} />
      </div>
    )}
  }
export default Hint;
