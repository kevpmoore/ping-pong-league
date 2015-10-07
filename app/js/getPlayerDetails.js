leagueTable.service('GetPlayerDetails', ['$http', function($http) {

  var promise;

  this.get = function() {
    promise = $http.get("../data/playerData.json");
    return promise;
  };

}]);
