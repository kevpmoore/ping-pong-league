leagueTable.controller('LeagueTableController', ['$http', 'GetPlayerDetails', function($http, GetPlayerDetails) {

  var league = this;

  league.allPlayers = [ ];

  // $http.get('../data/playerData.json').success(function(response){
  //   league.allPlayers = response;
  // });

  GetPlayerDetails.get().then(function (response) {
    league.allPlayers = response.data;
  });

  league.getNumber = function(num) {
    return new Array(num);
  };

  league.playerCounter = function () {
    return league.allPlayers.length;
  };

  // self.addToDo = function() {
  //   if(!self.newToDo || self.newToDo === '') {
  //     return;
  //   }
  //   self.toDoList.push( {task: self.newToDo, completed: false} );
  //   self.newToDo = '';
  // };
  //



}]);
