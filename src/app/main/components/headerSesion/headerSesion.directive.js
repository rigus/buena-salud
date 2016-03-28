module.exports = function (ngModule){

  ngModule.directive('headerSesion', headerSesion)

  function headerSesion() {
    var directive ={
      restrict: 'E',
      template: require('./headerSesion.html')
    }
    return directive
  }
}
