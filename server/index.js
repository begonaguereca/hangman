const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const API = require('./API/WordCollector.js');


var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/wordBank', function (req, res) {
  console.log(req.query.data)
  API.getWord(req.query.data)
    .then(word => {
      res.json(word);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

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
