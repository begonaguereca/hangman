import React from 'react';
import Popover from 'react-simple-popover';

class HintOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definition: null,
      clickedOne: true,
      open: false,
      pointDeducted: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.hints !== prevProps.hints) {
      if (this.props.hints && this.props.hints.definitions) {
        this.setState({clickedOne: false});
        this.setState({definition: this.props.hints.definitions});
        this.setState({pointDeducted: false});
      }
    }
  }

  handleClick(e) {
    this.setState({open: !this.state.open});
    if(!this.state.pointDeducted) {
      this.setState({pointDeducted: true});
      this.props.decrementPoints(1)
    }
  }

  handleClose(e) {
    this.setState({open: false});
  }

  render () {
    return (
      <div className="hint-one col-6">
        <button type="button" ref="target" className="btn btn-danger btn-hint-one"
          onClick={this.handleClick.bind(this)}
          disabled={this.state.clickedOne}>
          <b>Hint 1 </b><i>(-1pt)</i></button>
        <Popover
          placement='top'
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p><b>DEFINITION: </b><br/>{this.state.definition}</p>
        </Popover>
      </div>
    )}
  }
export default HintOne;
