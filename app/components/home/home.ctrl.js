
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
          poistenec: "Renátka Maláková",
          rodneCislo: "7712125678",
          datumNarodenia: "12.12.1977",
          ulica: "Ulicová",
          cisloDomu: "3",
          obec: "Banská Bystrica",
          pobocka: "21"
        }
      });
    }, 2500);
  };
});
