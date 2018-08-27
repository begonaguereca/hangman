const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const WordCollector = require('./API/WordCollector.js');
const SynonymCollector = require('./API/SynonymFinder.js');

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
