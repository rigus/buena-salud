module.exports = function (ngApp){
  ngApp.config(config)
  /*@ngIject*/
  function config ($stateProvider, $urlRouterProvider, $httpProvider){

    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app',{
        url: '/',
        template: require('./app/home/home.html')
      })
      .state('login',{
        url: '/login',
        template: require('./app/login/login.html')
      })
      .state('main',{
        url: '/buena-salud',
        abstract: true,
        template: require('./app/main/main.html')
      })
      /*Urls recepcionista*/
      .state('main.recepcionista',{
        url: '/recepcionista',
        template: require('./app/main/secretaria/secretaria.html')
      })
      .state('main.recepcionista.consultas',{
        url: '/consultas',
        template: require('./app/main/secretaria/consultas/listado/listado.html')
      })
      .state('main.recepcionista.doctores',{
        url: '/doctores',
        template: require('./app/main/secretaria/doctores/listadod/listadod.html'),
        controller : 'DoctorCtrl',
        controllerAs : 'vm',
        resolve: {
          arrDoctores: function(DoctorService){
            return DoctorService.getDoctores();
          }
        }
      })
      .state('main.recepcionista.pacientes',{
        url: '/pacientes',
        template: require('./app/main/secretaria/pacientes/listadop/listadop.html'),
        controller : 'PacienteCtrl',
        controllerAs : 'vm',
        resolve: {
          arrPacientes: function(PacienteService){
            return PacienteService.getPacientes();
          }
        }
      })
  }
}
