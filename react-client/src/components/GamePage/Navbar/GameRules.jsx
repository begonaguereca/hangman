import React from 'react';

class GameRules extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <li className="nav-item active">
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
                -	The guesser wins the game if they guess all letters in the secret word correctly and have not already lost the game per the conditions above {<br/>}
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
