const request = require('request');
const Promise = require('bluebird');

const getWord = () => {
  const url = 'http://app.linkedin-reach.io/words';
  const maxLength = 10;
  const minLength = 3;
  const qs = { maxLength, minLength};

  return new Promise((resolve, reject) => {
    request({url, qs}, (error, response, body) => {
      if(error) {
        reject(error);
      } else {
        let wordBank = body.split('\n');
        //console.log(wordBank, 'thingsginsgs')
        resolve(wordBank);
      }
    });
  });
}

module.exports.getWord = getWord;
