module.exports = function (ngApp){
  ngApp.config(config)
  /*@ngIject*/
  function config ($stateProvider, $urlRouterProvider){
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
        template: require('./app/main/main.html')
      })
  }
}
