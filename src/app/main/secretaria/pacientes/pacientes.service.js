module.exports = function (ngModule){
  ngModule.factory("PacienteService", PacienteService)

  /*@ngInject*/
  function PacienteService ($q,$http,URL){
    var services = {
      getPacientes : getPacientes,
      deletePaciente : deletePaciente,
      postPacientes : postPacientes

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

    function deletePaciente(pacienteId){
      var deferred = $q.defer();
      var pacienteId = angular.fromJson(pacienteId);
      $http
        .delete(URL.API + 'deletePaciente', {data: pacienteId})
        .success(function(res) {
          deferred.resolve(res);
        })
        .catch(function(res) {
          console.log(res);
          deferred.reject(res);
        });
      return deferred.promise;
    }

    function postPacientes(paciente){
      var deferred = $q.defer();
      var paciente = angular.fromJson(paciente);
      $http
        .post(URL.API + 'postPacientes', paciente)
        .success(function(res) {
          deferred.resolve(res);
        })
        .catch(function(res) {
          //console.log(res);
          deferred.reject(res);
        });
      return deferred.promise;
    }

  }
}
