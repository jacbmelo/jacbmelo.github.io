'use strict';

angular.module('app')
	.controller('HeaderCtrl', function($scope, $location) {
		$scope.homeMenuItem = {'title': 'Home', 'link': '#/'}
		$scope.aboutMenuItem = {'title': 'About me', 'link': '#/about'}

		$scope.leftMenu = [];

	    $scope.rightMenu = [$scope.aboutMenuItem];
	    
		$scope.isActive = function (viewLocation) { 
			console.log("viewLocation: " + viewLocation);
			console.log("$location.path(): " + $location.path());
			return viewLocation === "#" + $location.path();
		};
	});
