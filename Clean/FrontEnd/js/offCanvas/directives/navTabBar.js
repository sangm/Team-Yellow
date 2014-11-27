angular.module('myApp.directives.navTabBar', []).

	directive('navTabBar', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/nav-tab-bar.html"
		};
	}).

	controller("TabCtrl", function($scope) {
		$scope.tabValue = -1; // -1
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
	
})