module.exports = function(ngModule) {
  require('./success/success.controller')(ngModule);
  require('./success/success.directive')(ngModule);
  require('./warning/warning.controller')(ngModule);
  require('./warning/warning.directive')(ngModule);
  require('./bug/bug.controller')(ngModule);
  require('./bug/bug.directive')(ngModule);
};
