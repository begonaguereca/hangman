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
      level: 1,
      word: 'TEST',
      missedLetters: 0
    }
    this.updateDifficulty = this.updateDifficulty.bind(this);
  }

  updateDifficulty(level) {
    this.setState({level});

    $.ajax({
      url: '/wordBank',
      data: {data: level},
      success: (data) => {
        this.setState({
          word: data.toUpperCase()
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/wordBank',
      data: {data: this.state.level},
      success: (data) => {
        this.setState({
          word: data.toUpperCase()
        })
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
           <Route exact path='/Hangman'
              render={() => <Hangman word={this.state.word} alphabet={this.state.alphabet} updateDifficulty={this.updateDifficulty}/>}/>
         </div>
       </HashRouter>
     </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
