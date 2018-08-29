const WordCollector = require('./wordCollector.js');
const SynonymCollector = require('./synonymFinder.js');
//const key = require('../API/keys/config.js');
const request = require('request');
const unirest = require('unirest');

const mergeData = () => {

  WordCollector.getWord()
    .then(words => {
      let test = words.slice(0, 20)
      test.forEach(word => {
        unirest.get("https://wordsapiv1.p.mashape.com/words/" + word + "/hasCategories")
        .header("X-Mashape-Key", 'ADD KEY HERE')
        .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
        .end(result => {
          if(result.error) {
            console.log('ERROR',result.error);
          } else {

            console.log('results: ', result.body.hasCategories);
          }
        });
      });
    })
    .catch(err => {
      //res.sendStatus(500);
    })
}


module.exports.mergeData = mergeData;
