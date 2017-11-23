
/**
 * Module definition and dependencies
 */
angular.module('App.Home.Controller', [])

/**
 * Controller
 */
.controller('HomeCtrl', function(moment, $scope, $timeout) {

  /**
   * On init
   */
  this.$onInit = function() {

    //Set date
    this.now = moment();

    $timeout(function() {
      $scope.submissionData = angular.merge($scope.submissionData, {
        data: {
          poistenec: "Renátka Maláková"
        }
      });
      console.log($scope.submissionData);
    }, 2500);
  };
});
