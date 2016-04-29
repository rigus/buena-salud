module.exports = function (ngModule){
  ngModule.factory("PacienteService", PacienteService)

  /*@ngInject*/
  function PacienteService ($q,$http,URL){
    var services = {
      getPacientes : getPacientes

    }
    return services;

    function getPacientes(){
      var deferred = $q.defer();

      var secretaria = angular.fromJson(secretaria);

      $http
        .get(URL.API + 'getPacientes')
        .success(function(res) {
          deferred.resolve(res);
        })
        .catch(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

  }
}
