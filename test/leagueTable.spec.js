describe('LeagueTableController', function() {
  beforeEach(module('LeagueTable'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LeagueTableController');
  }));

  it('initialises with an empty array for players', function(){
    expect(ctrl.allPlayers).toEqual([ ]);
  });

  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("../data/playerData.json")
      .respond(
        players
      );
  }));

  beforeEach(function(){
    player1 = {name:'Arnold', won: 43, lost: 3, points: 80};
    player2 = {name:'Bradley', won: 51, lost: 12, points: 78};
  });

  var players = [
    {
      "name":"Arnold Smith",
      "won":43,
      "lost":3,
      "points":80
    },
    {
      "name":"Bradley Barton",
      "won":51,
      "lost":12,
      "points":78
    }
  ];

  it('completes a http request to retrieve data from JSON and pulls objects into players array', function() {
    httpBackend.flush();
    expect(ctrl.allPlayers).toEqual(players);
  });

  it('initialises with no games listed', function() {
  expect(ctrl.gameResults).toEqual([]);

  describe('add to game results', function() {
    it('adds game to the game results array', function() {
      // ctrl.addGame(cardigan);
      // expect(ctrl.shoppingCart[0].name).toEqual('Mohair cardigan');
    });
    it('does not add the game to the game results array if scores have not be inputted', function(){
      // ctrl.addGame(dress);
      // expect(ctrl.shoppingCart).toEqual([]);
    });
  });

});

});
