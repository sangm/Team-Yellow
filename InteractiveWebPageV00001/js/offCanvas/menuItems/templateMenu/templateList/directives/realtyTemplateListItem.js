angular.module('myApp.directives.realtyTemplateListItem', []).
	directive('realtyTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/realty-template-list-item.html"
		};
	});