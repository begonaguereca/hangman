import React from 'react';
import Alien1 from './AlienParts/AlienP1.jsx';
import Alien2 from './AlienParts/AlienP2.jsx';
import Alien3 from './AlienParts/AlienP3.jsx';
import Alien4 from './AlienParts/AlienP4.jsx';
import Alien5 from './AlienParts/AlienP5.jsx';
import Alien6 from './AlienParts/AlienP6.jsx';

class Alien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    let monster = null;

    if(this.props.missed === 1) {
      monster = <Alien1 />
    } else if (this.props.missed === 2) {
      monster = <Alien2 />
    } else if (this.props.missed === 3) {
      monster = <Alien3 />
    } else if (this.props.missed === 4) {
      monster = <Alien4 />
    } else if (this.props.missed === 5) {
      monster = <Alien5 />
    } else if (this.props.missed === 6) {
      monster = <Alien6 />
    }
    return (
      <div className="alien">
        <div className="ufo ufo-game">
          {monster}
        </div>
      </div>
    )}
  }


export default Alien;
