angular.module('myApp.directives.sideBarTemplateListItem', []).
	directive('sideBarTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/side-bar-template-list-item.html"
		};
	});