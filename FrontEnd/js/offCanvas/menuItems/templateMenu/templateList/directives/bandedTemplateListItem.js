angular.module('myApp.directives.bandedTemplateListItem', []).
	directive('bandedTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/banded-template-list-item.html"
		};
	});