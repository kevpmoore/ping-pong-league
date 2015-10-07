describe('LeagueTableController', function() {
  beforeEach(module('LeagueTable'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LeagueTableController');
  }));

  var fakePlayers = [
    {
      "name": "Arnold Smith",
      "won": 43,
      "lost": 3,
      "points": 70
    },
    {
      "name": "Bradley Barton",
      "won": 51,
      "lost": 12,
      "points": 88
    }
  ];

  var game = [
    {
      "player1Name": "Arnold Smith",
      "player2Name": "Bradley Barton",
      "score1": 3,
      "score2": 1,
      "created_at": 07102015
    }
  ];

  it('initialises with no games listed', function() {
    expect(ctrl.gameResults).toEqual([]);
  });

  describe('can add and delete games', function () {

    beforeEach(function() {
      ctrl.player1 = fakePlayers[0];
      ctrl.player2 = fakePlayers[1];
      ctrl.scores.player1 = 3;
      ctrl.scores.player2 = 1;
    });

    it('when a game is added it shows the player names and scores in latest games', function() {
      spyOn(Date, 'now').and.returnValue(07102015);
      ctrl.addGame();
      expect(ctrl.gameResults).toEqual(game);
    });

    it('and display the players name', function() {
      ctrl.addGame();
      expect(ctrl.gameResults[0].player1Name).toEqual('Arnold Smith');
    });

    it('and display the players score', function() {
      ctrl.addGame();
      expect(ctrl.gameResults[0].score1).toEqual(3);
    });

    it('adding a game increases the game count by 1', function() {
      ctrl.addGame();
      expect(ctrl.gameCounter()).toEqual(1);
    });

    it('removing game decreases game count by 1', function() {
      ctrl.deleteGame(game);
      expect(ctrl.gameCounter()).toEqual(0);
    });

  });

});
