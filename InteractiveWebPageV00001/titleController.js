var myApp = angular.module('myApp', []);

//myApp.factory('Data', function () {
//	return {headerFormStatus: 'false';};
//});

myApp.controller('PageCtrl', ['$scope', function($scope) {
	$scope.pg = {title: "Hello, World!"};
}]);

myApp.controller('TitleFormCtrl', ['$scope', function($scope) {
	$scope.status = true;
	$scope.title = '';
	$scope.changeTitle = function() {
		if($scope.title) {
			$scope.pg.title = this.title;
			$scope.status = !this.status;
			$scope.title = '';
//			$scope.headerFormStatus = true;
		}
	};
}]);

//myApp.controller('HeaderFormCtrl', ['$scope', function($scope, {
//	$scope.status = Data;
//}]);