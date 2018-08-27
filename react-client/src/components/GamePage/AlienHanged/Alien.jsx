import React from 'react';

class Alien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
      <div className="alien">
        <div className="ufo ufo-game">
          <div className="monster">
            <div className="body">
              <div className="ear"></div>
              <div className="ear"></div>
              <div className="vampi-mouth">
                <div className="vampi-tooth"></div>
              </div>
            </div>
            <div className="eye-lid">
              <div className="eyes">
                <div className="eye"></div>
              </div>
            </div>
            <div className="legs">
              <div className="alien-right-leg"></div>
              <div className="alien-left-leg"></div>
            </div>
          </div>
        </div>
      </div>
    )}
  }


export default Alien;
