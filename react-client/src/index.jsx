/*Component did mount should be one munction doing the ajax call*/

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, BrowserRouter as Router} from 'react-router-dom';
import $ from 'jquery';
import HomePage from './components/Homepage/HomePage.jsx';
import Hangman from './components/GamePage/HangmanPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ],
      uniqueCount: {},
      level: 1,
      word: '',
      missedLetters: 0
    }
    this.updateDifficulty = this.updateDifficulty.bind(this);
  }

  updateDifficulty(level) {
    if(typeof(level) === undefined) {
      level = this.state.level
    } else {
      this.setState({level});
    }

    $.ajax({
      url: '/wordBank',
      data: {data: level},
      success: (data) => {
        let uniqueCount = {};

        data.toUpperCase().split('').forEach(function(i) { uniqueCount[i] = (uniqueCount[i]||0) + 1;});
        this.setState({word: data.toUpperCase()});
        this.setState({uniqueCount});
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.updateDifficulty();
  }

  render () {
    return (
    <div className="container">
       <HashRouter>
         <div>
           <Route exact path='/'
             render={() => <HomePage/>}/>
           <Route exact path='/Hangman'
              render={() => <Hangman uniqueCount={this.state.uniqueCount} word={this.state.word} alphabet={this.state.alphabet} updateDifficulty={this.updateDifficulty}/>}/>
         </div>
       </HashRouter>
     </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
