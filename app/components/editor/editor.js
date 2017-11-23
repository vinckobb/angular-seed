
/**
 * Module definition and dependencies
 */
angular.module('App.Editor', [
  'App.Editor.Controller',
])

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('editor', {
    parent: 'app',
    url: '/editor',
    component: 'editorRoute',
  });
})

/**
 * Route component
 */
.component('editorRoute', {
  controller: 'EditorCtrl',
  templateUrl: 'editor/editor.html',
});
