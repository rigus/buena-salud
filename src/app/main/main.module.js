module.exports = function (){
  var main = angular.module('appBuenaSalud.main',[
    'appBuenaSalud.secretaria'
  ])
  require('./secretaria/secretaria.module')();
  console.log('main');
}
