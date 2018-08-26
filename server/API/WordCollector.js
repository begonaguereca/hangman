const request = require('request');
const Promise = require('bluebird');


const getWord = (difficulty) => {
  const url = 'http://app.linkedin-reach.io/words';
  const maxLength = 10;
  const minLength = 3;
  const qs = { difficulty, maxLength, minLength};

  return new Promise((resolve, reject) => {
    request({url, qs}, function (error, response, body) {
      if(error) {
        reject(err);
      } else {
        let wordBank = body.split('\n');
        let selectedIndex = Math.floor(Math.random() * wordBank.length);
        resolve(wordBank[selectedIndex]);
      }
    });
  });
}

module.exports.getWord = getWord;
