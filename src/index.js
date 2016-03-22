var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
var app = angular.module('appBuenaSalud', [
  'ui.router',
  'appBuenaSalud.home'
]);

require('./app/home/home.module')();
require('./app.config')(app);
