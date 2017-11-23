
/**
 * Module definition and dependencies
 */
angular.module('App', [

  //Angular & 3rd party
  'ui.router',

  //Meanie modules
  'Api.Service',
  'Analytics.Service',
  'Convert.Service',
  'DuplicateRequestsFilter.Decorator',
  'FormControls.Component',
  'KeyCodes.Service',
  'Log.Service',
  'Storage.Service',
  'Store.Service',

  //Core modules
  'App.Config',
  'App.Templates',
  'App.Component',
  'App.Auth',
  'App.Error',

  //App components
  'App.Home',
  'App.Editor',

  //Shared services
  'Shared.Moment.Service',

  //Shared filters
  'Shared.Moment.Filter',

  'formio',
  'ngFormBuilder'
])
.config(['formioComponentsProvider', function(formioComponentsProvider) {
  formioComponentsProvider.register('myfield', {
    title: 'My Field',
    template: 'formio/components/icons.html',
    controller: ['$scope', function($scope) {
    }],
    group: 'advanced',
    icon: 'fa fa-heart-o',
    settings: {
      key: "myfield"
    },
    views: []
  });
}])
.run(['$templateCache', function($templateCache) {
  console.log($templateCache);
  $templateCache.put('formio/components/icons.html',
    '<div>Hello world!</div>'
  );
}]);
