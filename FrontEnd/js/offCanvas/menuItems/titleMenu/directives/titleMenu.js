angular.module('myApp.directives.titleMenu', []).
	directive('titleMenu', function() {
		return {
			restrict: 'A',
			templateUrl: "Templates/offCanvas/menuItems/titleMenu/title-menu.html"
		};
	}).

	controller("TitleCtrl", function($scope, myFactory) {
		$scope.title = '';
//		$scope.changeTitle = function() {
	//			console.log('In title controller calling to change title to \'',
	//										$scope.title,'\'');
			myFactory.postTitle($scope.title);
	//			console.log('\tReturned to Title Controller change title function');
//		};
	})