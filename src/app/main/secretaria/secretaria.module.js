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
  require('./doctores/updateDoctor/formularioUpdate.controller')(secretaria);
  require('./doctores/updateDoctor/formularioUpdate.directive')(secretaria);
  require('./pacientes/pacientes.service')(secretaria);
  require('./pacientes/listadop/pacientes.controller')(secretaria);
  require('./pacientes/updatePaciente/formularioUpdate.controller')(secretaria);
  require('./pacientes/updatePaciente/formularioUpdate.directive')(secretaria);



}
