const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const WordCollector = require('./API/WordCollector.js');
const SynonymCollector = require('./API/SynonymFinder.js');
const MergeWords = require('./createData/mergeAPIs.js');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/wordBank', (req, res) => {
  //test.mergeData(1);
  console.log('INSIDE WORD BANK',req.query.data)
  WordCollector.getWord(req.query.data)
    .then(word => {
      console.log('did it work?', word)
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

app.get('/merge', (req, res) => {
  console.log('inside mereger')
  MergeWords.mergeData();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


// items.selectAll(function(err, data) {
//   if(err) {
//     res.sendStatus(500);
//   } else {
//     res.json(data);
//   }
// });
