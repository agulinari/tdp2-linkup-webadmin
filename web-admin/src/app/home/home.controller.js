'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .directive("notifications", function () { return { restrict: 'E', replace: 'true', templateUrl: 'home/notifications.html' } })       
  .controller('HomeCtrl', function($scope,$position) {
  });
