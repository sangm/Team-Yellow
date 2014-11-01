angular.module('myApp.directives.storeTemplateListItem', []).
	directive('storeTemplateListItem', function() {
		return {
			restrict: 'E',
			templateUrl: "Templates/offCanvas/menuItems/templateMenu/templateList/store-template-list-item.html"
		};
	});