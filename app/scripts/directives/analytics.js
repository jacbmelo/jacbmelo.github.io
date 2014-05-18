'use strict';

angular.module('app')
	.directive('analytics', ['$rootScope', '$location',
    	function ($rootScope, $location) {
    	return {
        	link: function (scope, elem, attrs, ctrl) {
            	$rootScope.$on('$viewContentLoaded', function(event, currRoute, prevRoute) {
                	ga('set', 'page', $location.path());
                	ga('send', 'pageview');
            	});
        	}
    	}
	}]);
