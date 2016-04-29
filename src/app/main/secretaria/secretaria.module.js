module.exports = function (){
  var secretaria = angular.module('appBuenaSalud.secretaria', [])
  console.log('secretaria');
  require('./consultas/formulario/formulario.directive')(secretaria);
  require('./consultas/formulario/consultas.controller')(secretaria);
  require('./doctores/formulariod/formulariod.directive')(secretaria);
  require('./doctores/formulariod/doctores.controller')(secretaria);
  require('./pacientes/formulariop/formulariop.directive')(secretaria);
  require('./pacientes/formulariop/pacientes.controller')(secretaria);
  require('./doctores/listadod/doctor.controller')(secretaria);
  require('./doctores/doctores.service')(secretaria);

}
