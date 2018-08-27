const unirest = require('unirest');
const Promise = require('bluebird');
const key = require('./keys/config.js');

const getSynonym = (word) => {

  return new Promise((resolve, reject) => {
    unirest.get("https://wordsapiv1.p.mashape.com/words/" + word)
    .header("X-Mashape-Key", key.config.SYNONYM_KEY)
    .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
    .end(result => {
      if(result.error) {
        reject(result.error);
      } else {
        console.log(result.body)
        resolve(result.body);
      }
    });
  });
}

module.exports.getSynonym = getSynonym;
