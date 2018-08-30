import React from 'react';
import Popover from 'react-simple-popover';

class HintTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      synonym: null,
      clickedTwo: true,
      open: false,
      pointDeducted: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.hints !== prevProps.hints) {
      if (this.props.hints && this.props.hints.synonyms) {
        this.setState({clickedTwo: false});
        this.setState({synonym: this.props.hints.synonyms});
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
      <div className="hint-two col-6">
        <button type="button" ref="target" className="btn btn-danger btn-hint-two"
          onClick={this.handleClick.bind(this)}
          disabled={this.state.clickedTwo}>
          <b>Hint 2 </b><i>(-1pt)</i></button>
        <Popover
          placement='top'
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p><b>SYNONYM: </b><br/>{this.state.synonym}</p>
        </Popover>
      </div>
    )}
  };

export default HintTwo;
