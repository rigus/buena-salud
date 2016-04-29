module.exports = function(ngModule) {
  require('./success/success.controller')(ngModule);
  require('./success/success.directive')(ngModule);
  require('./error/error.controller')(ngModule);
  require('./error/error.directive')(ngModule);
    require('./warning/warning.controller')(ngModule);
  require('./warning/warning.directive')(ngModule);
};
