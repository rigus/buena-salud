module.exports = function (ngModule){
  ngModule.controller('SecreDoctorFormularioCtrl', SecreDoctorFormularioCtrl)
  /*@ngInject*/
  function SecreDoctorFormularioCtrl (DoctorService, $state, $scope, $compile){
    var body = angular.element(document).find('body');
    var vm = this;
    vm.especialidades=[]
    vm.doctores=[]

    DoctorService.getEspecialidades()
    .then(function(response){
      vm.especialidades = response;
    })
    .catch(function(){
      console.log(err);
    });

    vm.addDoctor = function(){
     console.log("agregando doctor");
     DoctorService.postDoctores(vm.doctor)
      .then(function(response){
         console.log(vm.doctor);
         console.log(response);
         vm.doctores.push(response);
         if(response.estatus == 'ok'){
           console.log('doctor agregado');
           vm.open = false;
           $state.reload();
           console.log(response.msj);
           body.append($compile("<alert-succes correcto='"+ response.msj +"'></alert-succes>")($scope));
         } else {
           console.log(response.msj);
         }
       }).catch(function(err){
         console.log(err);
         console.log('error');
       });
   };


  }

}
