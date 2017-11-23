
/**
 * Module definition and dependencies
 */
angular.module('App.Editor.Controller', [])

/**
 * Controller
 */
.controller('EditorCtrl', function(moment, $scope, $timeout) {

  /**
   * On init
   */
  this.$onInit = function() {
    $scope.myForm = {};
  };
});
