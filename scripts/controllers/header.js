'use strict';

angular.module('app')
	.controller('HeaderCtrl', function($scope, $location) {
		$scope.menu = [{
	      'title': 'About',
	      'link': '#/about'
	    }];
	    
		$scope.isActive = function (viewLocation) { 
			console.log("viewLocation: " + viewLocation);
			console.log("$location.path(): " + $location.path());
			return viewLocation === "#" + $location.path();
		};
	});