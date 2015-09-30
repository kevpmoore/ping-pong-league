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

  it('completes a http request retrieve data from JSON and pulls objects into players array', function() {
    httpBackend.flush();
    expect(ctrl.allPlayers).toEqual(players);
  });

});
