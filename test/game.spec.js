describe('LeagueTableController', function() {
  beforeEach(module('LeagueTable'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LeagueTableController');
  }));

  var fakePlayers = [
    {
      "name":"Arnold Smith",
      "won":43,
      "lost":3,
      "points":70
    },
    {
      "name":"Bradley Barton",
      "won":51,
      "lost":12,
      "points":88
    }
  ];

  var game = [
    {
      'player1Name': 'Arnold Smith',
      'player2Name': 'Bradley Barton',
      'score1': 3,
      'score2': 1,
    }
  ];

  it('initialises with no games listed', function() {
    expect(ctrl.gameResults).toEqual([]);
  });

  describe('can add and delete games', function () {

    beforeEach(function() {
      ctrl.player1.name = "Arnold Smith";
      ctrl.player2.name = "Bradley Barton";
      ctrl.scores.player1 = 3;
      ctrl.scores.player2 = 1;
    });

    // it('and display the results of a game', function() {
    //   ctrl.addGame();
    //   expect(ctrl.gameResults).toEqual(game);
    // });

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
