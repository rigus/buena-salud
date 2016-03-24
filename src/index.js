var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
var app = angular.module('appBuenaSalud', [
  'ui.router',
  'appBuenaSalud.home',
  'appBuenaSalud.login',
  'appBuenaSalud.main'

]);

require('./app/home/home.module')();
require('./app/login/login.module')();
require('./app/main/main.module')();
require('./app.config')(app);
