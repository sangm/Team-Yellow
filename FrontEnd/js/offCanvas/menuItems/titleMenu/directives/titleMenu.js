angular.module('myApp.directives.titleMenu', [])
	.directive('titleMenu', function() {
		return {
			restrict: 'A',
			templateUrl: "Templates/offCanvas/menuItems/titleMenu/title-menu.html"
		};
	});