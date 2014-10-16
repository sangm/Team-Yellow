var myApp = angular.module("myApp", [
	'ngRoute',
//	'templateControllers',
	'myApp.directives.navTabBar',
	'myApp.directives.titleMenu',
	'myApp.directives.templateMenu'
])

/*****************************************************************************/

	.factory('myFactory', function() {
		var factory = {};
		var pageInfo = {title: 'Page Title'};
		var observerCallbacks = [];

//		console.log('Inside myFactory');

		factory.registerObserverCallback = function(callback){
			observerCallbacks.push(callback);
		};

		var notifyObservers = function(){
			angular.forEach(observerCallbacks, function(callback){
				if(typeof callback === "function") {
					callback();
				} else {
					alert('Inside of myFactory.notifyObservers() tried to execute ',
								'undefined callback function.',
								'HINT: This is because the the callback function passed to ',
								'			 myFactory.postTitle(\'UNDEFINEDFUNCTION\') was not ',
								'			 a valid function.');
				};
			});
		};

		factory.getTitle = function() {
//			console.log('\tInside myFactory.getTitle');
//			console.log('\t\tTitle: ', pageInfo.title);
			return pageInfo.title;
		};

		factory.postTitle = function(pgTitle) {
			pageInfo.title = pgTitle;
//			console.log('\tIn my Factory posting tile to...');
//			console.log('\t\tTitle: ', pageInfo.title);
			notifyObservers();
		};

		return factory;
	})

/*****************************************************************************/

	.controller("PageCtrl", function($scope, myFactory) {
//		console.log('Initial Page Controller Call');
		$scope.title = myFactory.getTitle();
//		console.log('\tPage Controller Title Now initialized to');
//		console.log('\t\tTile: ', $scope.title);
//		console.log('---------------------------------------------------------');

		var getPageTitle = function() {
//			console.log('Inside getPageTitle()');
			$scope.title = myFactory.getTitle();
//			console.log('\t\tReturn to getPageTitle() from myFactory')
//			console.log('\t\tPageTitle: ', $scope.title);
		};

		myFactory.registerObserverCallback(getPageTitle);

	})

/*****************************************************************************/

	.controller("TabCtrl", function($scope) {
		$scope.tabValue = -1;
		$scope.setTab = function(setTab) {
			if(setTab === $scope.tabValue){
				$scope.tabValue = 2;
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

/*****************************************************************************/

	.controller("TitleCtrl", function($scope, myFactory) {
		$scope.title = '';
		$scope.changeTitle = function() {
//			console.log('In title controller calling to change title to \'',
//										$scope.title,'\'');
			myFactory.postTitle($scope.title);
//			console.log('\tReturned to Title Controller change title function');
		};
	}).

/*****************************************************************************/

	config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'partials/default-view.html'
				}).
				when('/banded', {
					templateUrl: 'partials/banded-demo.html'
				}).
				when('/banner-home', {
					templateUrl: 'partials/banner-home-demo.html'
				}).
				when('/blog', {
					templateUrl: 'partials/blog-demo.html'
				}).
				when('/contact', {
					templateUrl: 'partials/contact-demo.html'
				}).
				when('/feed', {
					templateUrl: 'partials/feed-demo.html'
				}).
				when('/grid', {
					templateUrl: 'partials/grid-demo.html'
				}).
				when('/marketing1', {
					templateUrl: 'partials/marketing1-demo.html'
				}).
				when('/marketing2', {
					templateUrl: 'partials/marketing2-demo.html'
				}).
				when('/orbit', {
					templateUrl: 'partials/orbit-demo.html'
				}).
				when('/product', {
					templateUrl: 'partials/prodcuct-demo.html'
				}).
				when('/realty', {
					templateUrl: 'partials/realty-demo.html'
				}).
				when('/side-bar', {
					templateUrl: 'partials/side-bar-demo.html'
				}).
				when('/so-boxy', {
					templateUrl: 'partials/so-boxy-demo.html'
				}).
				when('/store', {
					templateUrl: 'partials/store-demo.html'
				}).
				when('/workspace', {
					templateUrl: 'partials/workspace-demo.html'
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);