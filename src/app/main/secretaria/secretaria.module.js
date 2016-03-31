module.exports = function (){
  var secretaria = angular.module('appBuenaSalud.secretaria', [])
  console.log('secretaria');
  require('./consultas/formulario/formulario.directive')(secretaria);
  require('./consultas/formulario/consultas.controller')(secretaria);

}
