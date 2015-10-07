leagueTable.service('GetPlayerDetails', ['$http', function($http) {

  var promise;

  this.get = function() {
    if (!promise) {
      promise = $http.get("../data/playerData.json");
    }
    return promise;
  };

}]);
