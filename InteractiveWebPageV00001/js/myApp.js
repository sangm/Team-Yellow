var myApp = angular.module("myApp", []);

myApp.controller("TabCtrl", function($scope) {
	$scope.tabValue = -1;
	$scope.setTab = function(setTab) {
		if(setTab === $scope.tabValue){
			$scope.tabValue = -1;
			return;
		}
		$scope.tabValue = setTab;
	};
	$scope.isSet = function(tabClicked) {
		if(tabClicked === $scope.tabValue) {
			return true;
		}
	};
});

/*
myApp.directive('offCanvasNav', function() {
	return {
		restrict: 'E',
		templateUrl: "Tempates/off-canvas-nav.html"
	};
});
*/