angular.module('myApp.directives.templateMenu', [
	'myApp.directives.bandedTemplateListItem',
	'myApp.directives.bannerHomeTemplateListItem',
	'myApp.directives.blogTemplateListItem',
	'myApp.directives.contactTemplateListItem',
	'myApp.directives.feedTemplateListItem',
	'myApp.directives.gridTemplateListItem',
	'myApp.directives.marketing1TemplateListItem',
	'myApp.directives.marketing2TemplateListItem',
	'myApp.directives.orbitHomeTemplateListItem',
	'myApp.directives.productTemplateListItem',
	'myApp.directives.realtyTemplateListItem',
	'myApp.directives.sideBarTemplateListItem',
	'myApp.directives.soBoxyTemplateListItem',
	'myApp.directives.storeTemplateListItem',
	'myApp.directives.workspaceTemplateListItem'
]).

	directive('templateMenu', function() {
		return {
			restrict: 'A',
			templateUrl: 
				"Templates/offCanvas/menuItems/templateMenu/template-menu.html"
		};
	}).

	controller('TemplateCtrl', function($scope, myFactory) {
		$scope.templateChoice = '';



		$scope.changeTemplate = function() {
			console.log('Inside changeTemplate');
			if($scope.templateChoice) {
				console.log('\t' + 'Inside changeTemplate if statement');
				myFactory.postTemplate($scope.templateChoice);
			}
		};

	});