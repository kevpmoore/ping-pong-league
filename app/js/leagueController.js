leagueTable.controller('LeagueTableController', ['$http', 'GetPlayerDetails', function($http, GetPlayerDetails) {

  var league = this;

  league.allPlayers = [];

  league.gameResults = [];

  league.player1 = '';
  league.player2 = '';
  league.scores = {
    player1: 0,
    player2: 0
  };


  GetPlayerDetails.get().then(function (response) {
    league.allPlayers = response.data;
  });

  league.getNumber = function(num) {
    return new Array(num);
  };

  league.playerCounter = function() {
    return league.allPlayers.length;
  };


  // Add and delete games //

  league.addGame = function() {
    league.checkPlayers();
    league.checkScores();
    // create checkWinner function and increament won count for that player

    league.gameResults.push({
      player1Name: league.player1.name,
      player2Name: league.player2.name,
      score1: league.scores.player1,
      score2: league.scores.player2
    });

    console.log(league.gameResults);

    league.resetGameForm();
  };

  league.resetGameForm = function() {
    league.player1 = '';
    league.player2 = '';
    league.scores = {
      player1: 0,
      player2: 0
    };
  };

  league.deleteGame = function(game) {
    var index = league.gameResults.indexOf(game);
    league.gameResults.splice(index, 1);
  };

  league.orderGames = function() {
    // get index of each game and then use to filter order by index in reverse for latest games section and ordering
  };

  league.checkPlayers = function() {
    if (!league.player1 || league.player1 === '' || !league.player2 || league.player2 === '') {
      alert('Please add players');
      return;
    }
    if (league.player1 === league.player2) {
      alert('Please make sure the players names are not the same');
      return;
    }
  };

  league.checkScores = function() {
    if (league.scores.player1 < 0 || league.scores.player1 > 5 || league.scores.player2 < 0 || league.scores.player2 > 5) {
      alert('Please enter a valid number');
      return;
    }
    // check to make sure an integer is entered
  };

}]);
