import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, BrowserRouter as Router} from 'react-router-dom';
import $ from 'jquery';
import HomePage from './components/Homepage/HomePage.jsx';
import Hangman from './components/GamePage/HangmanPage.jsx';
import Username from './components/UsernamePage/Username.jsx';
import Leaders from './components/LeaderboardPage/Leaders.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCount: {},
      level: 1,
      word: 'SPACE',
      missedLetters: 0,
      hints: null,
      roundOver: false,
      username: '',
      score: 50,
      leaders : []
    }
    this.updateDifficulty = this.updateDifficulty.bind(this);
    this.getSynonym = this.getSynonym.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.decrementPoints = this.decrementPoints.bind(this);
    this.incrementPoints = this.incrementPoints.bind(this);
    this.updateRoundOver = this.updateRoundOver.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.getTopScoringPlayers = this.getTopScoringPlayers.bind(this);
  }

  updateRoundOver() {
    this.setState({roundOver: true});
  }

  updateUsername(name) {
    this.setState({username: name});
  }

  decrementPoints(points) {
    let newScore = this.state.score - points;
    this.setState({score: newScore});
  }

  incrementPoints() {
    let newScore = (this.state.level * 10) + this.state.score;
    this.setState({score: newScore});
  }

  resetScore() {
    this.setState({score: 50});
  }

  updateDifficulty(level) {
    this.setState({level});

    $.ajax({
      url: '/wordBank',
      data: {data: level},
      success: (word) => {
        let uniqueCount = {};
        word.toUpperCase().split('').forEach(function(i) { uniqueCount[i] = (uniqueCount[i]||0) + 1;});
        this.setState({word: word.toUpperCase()});
        this.setState({uniqueCount});
        this.getSynonym(word);
        this.setState({roundOver: false});
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.updateDifficulty(1);
  }

  getSynonym(word) {
    $.ajax({
      url: '/synonym',
      data: {data: word},
      success: (hints) => {
        this.setState({hints});
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  getTopScoringPlayers() {
    let newPlayersData = {name: this.state.username, score: this.state.score};

    $.ajax({
      url: '/leaders',
      data: {data: newPlayersData},
      success: (leaders) => {
        this.setState({leaders});
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div className="container">
       <HashRouter>
         <div>
           <Route exact path='/'
             render={() => <HomePage/>}/>
           <Route exact path='/Username'
             render={() => <Username updateUsername={this.updateUsername}/>}/>
           <Route exact path='/Hangman'
              render={() => <Hangman username={this.state.username}
                                     updateUsername={this.updateUsername}
                                     score={this.state.score}
                                     decrementPoints={this.decrementPoints}
                                     incrementPoints={this.incrementPoints}
                                     uniqueCount={this.state.uniqueCount}
                                     word={this.state.word}
                                     hints={this.state.hints}
                                     roundOver ={this.state.roundOver}
                                     updateDifficulty={this.updateDifficulty}
                                     updateRoundOver={this.updateRoundOver}
                                     resetScore={this.resetScore}
                                     getTopScoringPlayers={this.getTopScoringPlayers}
                                   />
                                 }/>
           <Route exact path='/Leaders'
              render={() => <Leaders leaders={this.state.leaders}/>}/>
         </div>
       </HashRouter>
     </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
