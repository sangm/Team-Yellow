angular.module('myApp.directives.gridTemplateListItem', []).
	directive('gridTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/grid-template-list-item.html"
		};
	});