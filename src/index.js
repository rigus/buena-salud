var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
var app = angular.module('appBuenaSalud', [
  'ui.router',
  'appBuenaSalud.home',
  'appBuenaSalud.login'
]);

require('./app/home/home.module')();
require('./app/main/login/login.module')();
require('./app.config')(app);
