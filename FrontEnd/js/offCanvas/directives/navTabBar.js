angular.module('myApp.directives.navTabBar', [])
	.directive('navTabBar', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/nav-tab-bar.html"
		};
	});