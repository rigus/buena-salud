module.exports = function (ngModule){
  ngModule.directive('secretariaFormularioConsulta',secretariaFormularioConsulta)

  /*@ngInject*/
  function secretariaFormularioConsulta (){
    return {
      restrict : 'E',
      scope: {
        open: '='
      },
      template: require('././consultas.html'),
      bindToController : true,
      controller: 'SecreConsultaFormularioCtrl',
      controllerAs: 'vm'

    };
  }
}
