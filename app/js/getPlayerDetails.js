leagueTable.factory('GetPlayerDetails', ['$http', function($http) {

  var promise;

  return{
    get: function(){
      if (!promise){
        promise =  $http.get("../data/playerData.json");
      }
      return promise;
    },
  };
}]);
