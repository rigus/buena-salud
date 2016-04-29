module.exports = function (ngModule){
  ngModule.controller('SecreDoctorFormularioUpdateCtrl', SecreDoctorFormularioUpdateCtrl)
  /*@ngInject*/
  function SecreDoctorFormularioUpdateCtrl (DoctorService, $state){
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

vm.updateDoctor = function(){
     console.log(vm.doctor);
     DoctorService.putDoctor(vm.doctor)
      .then(function(response){
        if (response.estatus == "ok") {
          console.log('update');
          vm.open = false;
          $state.reload();
         // body.append($compile("<alert-succes correcto='"+ response.msj +"'></alert-succes>")($scope));
        }else {
          console.log(response.msj);
        }
      }).catch(function(err){
        console.log(err);
      });
   };


  }

}