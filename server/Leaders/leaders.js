const updateTopPlayers = (newScore) => {
  let topScoringPlayers = [{name: 'XueSpacer', score: 10000}, {name: 'WinnerWinner', score: 2000}, {name: 'ImHereForCupcakes', score: 500}, {name: 'AllIDoIsWin', score: 300}, {name: 'KeepItCoing', score: 200}];
  let intScore = parseInt(newScore.score);
  newScore.score = intScore

  //Check if new score is smaller than the smallest on scoreboard
  if(newScore.score < topScoringPlayers[4].score) {
    return topScoringPlayers;
  } else {
    for(var i = topScoringPlayers.length - 1; i >= 0; i--) {
      if((newScore.score > topScoringPlayers[i].score) && (i === 0 || newScore.score <= topScoringPlayers[i -1].score)) {
        topScoringPlayers.splice(i, 0, newScore);
        topScoringPlayers.pop();
        break;
      }
    }
  }
  return topScoringPlayers;
}

module.exports.updateTopPlayers = updateTopPlayers;
