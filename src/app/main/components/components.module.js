module.exports = function (){
  var components = angular.module('appBuenaSalud.main.components', [])
  require('./headerSesion/headerSesion.directive')(components);
}
