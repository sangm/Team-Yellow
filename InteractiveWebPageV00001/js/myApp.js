var myApp = angular.module("myApp", []);

myApp.factory('myFactory', function() {
	var pageInfo = {title: 'Page Title'};

	var factory = {};

	factory.getTitle = function() {
		return pageInfo.title;
	};

	factory.postTitle = function(pgTitle) {
		pageInfo.title = pgTitle;
	};

	return factory;
});

myApp.controller("PageCtrl", function($scope, myFactory) {
	$scope.pageTitle = myFactory.getTitle();
});

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

myApp.controller("TitleCtrl", function($scope, myFactory) {
	$scope.title = '';
	$scope.changeTitle = function() {
		myFactory.postTitle($scope.title);
	};
});
