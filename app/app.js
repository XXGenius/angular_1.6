'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.catalog',
  'myApp.basket'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/catalog'});
}]);
