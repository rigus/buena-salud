var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.js')
var app = angular.module('appBuenaSalud', [
  'ui.router',
  'appBuenaSalud.home',
  'appBuenaSalud.login',
  'appBuenaSalud.main',
  'appBuenaSalud.main.components'

]);

require('./app/home/home.module')();
require('./app/login/login.module')();
require('./app/main/main.module')();
require('./app/main/components/components.module')();
require('./app.config')(app);
require('./app.constants')(app);