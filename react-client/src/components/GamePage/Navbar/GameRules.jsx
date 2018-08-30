import React from 'react';

class GameRules extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <li className="nav-item game-rules active">
        <a className="nav-link"
          ref="target"
          data-toggle="modal"
          data-target="#exampleModal"
          >Game Rules <span className="sr-only">(current)</span></a>
      </li>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Hangman Rules</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                -	At the start of the game the computer/secret-keeper will choose a dictionary word {<br/>}
                -	The guesser loses the game if they guess 6 letters that are not in the secret word {<br/>}
                -	The guesser wins the round if they guess all letters in the secret word correctly and have not already lost the game per the conditions above {<br/>}
                -	You can choose to solve words that are at different levels of difficulty {<br/>}
                -	If you solve a word at a higher level it is worth more points (Level 1: 10 pts, Level 2: 20pts, Level 3: 30pts, etc...) {<br/>}
                -	Hints are sometimes available, if you chose to use a hint you will be deducted - 1pt per hint used {<br/>}
                - Once you're done playing, click the "Game Over" button and see if you made the scoreboard! {<br/>}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default GameRules;
