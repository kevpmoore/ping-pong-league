leagueTable.controller('LeagueTableController', ['$http', 'GetPlayerDetails', function($http, GetPlayerDetails) {

  var self = this;

  self.allPlayers = [];
  self.gameResults = [];
  self.player1 = '';
  self.player2 = '';
  self.scores = {
    player1: null,
    player2: null
  };


  GetPlayerDetails.get().then(function(response) {
    self.allPlayers = response.data;
  });

  self.getNumber = function(num) {
    return new Array(num);
  };

  self.playerCounter = function() {
    return self.allPlayers.length;
  };

  self.addGame = function() {
    self.checkPlayers();
    self.checkScores();

    self.gameResults.push({
      player1Name: self.player1.name,
      player2Name: self.player2.name,
      score1: self.scores.player1,
      score2: self.scores.player2,
      created_at: Date.now()
    });
    // console.log(self.gameResults[0].player1Name);
    // console.log(self.gameResults[0].score1);
    self.resetGameForm();
  };

  self.resetGameForm = function() {
    self.player1 = '';
    self.player2 = '';
    self.scores = {
      player1: null,
      player2: null
    };
  };

  self.deleteGame = function(game) {
    var index = self.gameResults.indexOf(game);
    self.gameResults.splice(index, 1);
  };

  self.gameCounter = function() {
    return self.gameResults.length;
  };

  self.checkPlayers = function() {
    if (!self.player1 || self.player1 === '' || !self.player2 || self.player2 === '') {
      alert('Please add players');
      return;
    }
    if (self.player1 === self.player2) {
      alert('Please make sure the players names are not the same');
      return;
    }
  };

  self.checkScores = function() {
    if (self.scores.player1 < 0 || self.scores.player1 > 5 || self.scores.player2 < 0 || self.scores.player2 > 5) {
      alert('Please enter a valid number');
      return;
    }
  };

}]);
