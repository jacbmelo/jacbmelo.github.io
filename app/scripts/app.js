'use strict';


// Declare app level module which depends on filters, services, directives and controllers
var app = angular.module('app', [
  'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'app/views/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'app/views/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'app/views/contact.html', controller: 'ContactCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);