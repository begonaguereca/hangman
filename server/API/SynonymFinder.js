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
        let defSynmObj = abstractDefAndSynonyms(result.body);
        resolve(defSynmObj);
      }
    });
  });
}

const abstractDefAndSynonyms = (obj) => {
  let definitions = [], synonyms = [];

  if(Array.isArray(obj.results)){
    obj.results.forEach((description, i) => {
      if(description.definition) {definitions.push((i + 1) + '. ' + description.definition)}
      if(description.synonyms) {synonyms.push((i + 1) + '. ' + description.synonyms)}
    });

    let test = {definitions: definitions.join('\n'), synonyms: synonyms.join('\n')}
    return {definitions: definitions.join('\n'), synonyms: synonyms.join('\n')};
  } else {
    return null;
  }
}


module.exports.getSynonym = getSynonym;
