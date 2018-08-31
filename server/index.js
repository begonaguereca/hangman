const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const WordCollector = require('./API/WordCollector.js');
const SynonymCollector = require('./API/SynonymFinder.js');
const LeaderCalc = require('./Leaders/leaders.js');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/wordBank', (req, res) => {
  WordCollector.getWord(req.query.data)
    .then(word => {
      res.json(word);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

app.get('/synonym', (req, res) => {
  SynonymCollector.getSynonym(req.query.data)
    .then(synonym => {
      res.json(synonym);
    })
    .catch(err => {
      res.json(err);
    })
});

app.get('/leaders', (req, res) => {
  let leaderBoard = LeaderCalc.updateTopPlayers(req.query.data);
  res.json(leaderBoard);
})

app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}/`);
});
