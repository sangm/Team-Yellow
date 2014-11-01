var myApp = angular.module("myApp", [
	'ngRoute',
	'myApp.directives.navTabBar',
	'myApp.directives.titleMenu',
	'myApp.directives.templateMenu',
	'myApp.directives.editTemplate'
]).

/*****************************************************************************/

	factory('myFactory', function() {
		var factory = {};
		var pageInfo = {
			title: 'Page Title',
			template: 'noTemplateSelected'
		};
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

		factory.getTemplate = function() {
			console.log('\tInside myFactory.getTemplate');
			console.log('\t\tTemplate Choice: ', pageInfo.template);
			return pageInfo.template;
		};

		factory.postTemplate = function(pgTemplate) {
			console.log('\tIn my Factory posting template to...');
			pageInfo.template = pgTemplate;
			console.log('\t\tTemplate Choice: ', pageInfo.template);
		};

		var templateInfo = {
			links: []
		};

		factory.pushLink = function() {
																	 console.log('Inside Edit Template Factory');
			templateInfo.links[0] = 'Hello';
		};

		return factory;
	}).

/*****************************************************************************/

	controller("PageCtrl", function($scope, myFactory) {
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

	}).

/*****************************************************************************/

	config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'partials/default-view.html'
				}).
				when('/banded', {
					templateUrl: 'partials/previewTemplates/banded-demo.html'
				}).
				when('/banner-home', {
					templateUrl: 'partials/previewTemplates/banner-home-demo.html'
				}).
				when('/blog', {
					templateUrl: 'partials/previewTemplates/blog-demo.html'
				}).
				when('/contact', {
					templateUrl: 'partials/previewTemplates/contact-demo.html'
				}).
				when('/feed', {
					templateUrl: 'partials/previewTemplates/feed-demo.html'
				}).
				when('/grid', {
					templateUrl: 'partials/previewTemplates/grid-demo.html'
				}).
				when('/marketing1', {
					templateUrl: 'partials/previewTemplates/marketing1-demo.html'
				}).
				when('/marketing2', {
					templateUrl: 'partials/previewTemplates/marketing2-demo.html'
				}).
				when('/orbit', {
					templateUrl: 'partials/previewTemplates/orbit-demo.html'
				}).
				when('/product', {
					templateUrl: 'partials/previewTemplates/prodcuct-demo.html'
				}).
				when('/realty', {
					templateUrl: 'partials/previewTemplates/realty-demo.html'
				}).
				when('/side-bar', {
					templateUrl: 'partials/previewTemplates/side-bar-demo.html'
				}).
				when('/so-boxy', {
					templateUrl: 'partials/previewTemplates/so-boxy-demo.html'
				}).
				when('/store', {
					templateUrl: 'partials/previewTemplates/store-demo.html'
				}).
				when('/workspace', {
					templateUrl: 'partials/previewTemplates/workspace-demo.html'
				}).
				when('/edit-banded', {
					templateUrl: 'partials/editTemplates/edit-banded-template.html'
				}).
				when('/edit-banner-home', {
					templateUrl: 'partials/editTemplates/edit-banner-home-template.html'
				}).
				when('/edit-blog', {
					templateUrl: 'partials/editTemplates/edit-blog-template.html'
				}).
				when('/edit-contact', {
					templateUrl: 'partials/editTemplates/edit-contact-template.html'
				}).
				when('/edit-feed', {
					templateUrl: 'partials/editTemplates/edit-feed-template.html'
				}).
				when('/edit-grid', {
					templateUrl: 'partials/editTemplates/edit-grid-template.html'
				}).
				when('/edit-marketing1', {
					templateUrl: 'partials/editTemplates/edit-marketing1-template.html'
				}).
				when('/edit-marketing2', {
					templateUrl: 'partials/editTemplates/edit-marketing2-template.html'
				}).
				when('/edit-orbit', {
					templateUrl: 'partials/editTemplates/edit-orbit-template.html'
				}).
				when('/edit-product', {
					templateUrl: 'partials/editTemplates/edit-prodcuct-template.html'
				}).
				when('/edit-realty', {
					templateUrl: 'partials/editTemplates/edit-realty-template.html'
				}).
				when('/edit-side-bar', {
					templateUrl: 'partials/editTemplates/edit-side-bar-template.html'
				}).
				when('/edit-so-boxy', {
					templateUrl: 'partials/editTemplates/edit-so-boxy-template.html'
				}).
				when('/edit-store', {
					templateUrl: 'partials/editTemplates/edit-store-template.html'
				}).
				when('/edit-workspace', {
					templateUrl: 'partials/editTemplates/edit-workspace-template.html'
				}).
				when('/edit-noTemplateSelected', {
					templateUrl: 'partials/editTemplates/no-template-selected.html'
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);